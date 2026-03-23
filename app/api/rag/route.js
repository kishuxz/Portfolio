// app/api/rag/route.js
// RAG API endpoint for the portfolio chatbot.
// Uses keyword-based retrieval over a static knowledge base,
// then calls an LLM (Groq, OpenAI, or HuggingFace) to generate a grounded answer.
// Provider priority: GROQ_API_KEY → OPENAI_API_KEY → HUGGINGFACE_API_KEY → fallback

import { NextResponse } from 'next/server';
import { retrieveRelevantChunks } from '@/lib/portfolio-knowledge';

// ─── Rate limiting (simple in-memory, resets on cold start) ─────────────────
const requestCounts = new Map();
const RATE_LIMIT = 15;          // max requests per window
const RATE_WINDOW_MS = 60_000;  // 1-minute window

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = requestCounts.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    requestCounts.set(ip, { count: 1, start: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// ─── LLM Providers ───────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are an AI assistant embedded in Kishore Kumar Ramkumar's portfolio website.
Your only job is to answer questions about Kishore based on the provided context.

Rules:
- Answer using ONLY the information in the context below — do not invent facts.
- Be concise and friendly (2–4 sentences unless more detail is explicitly requested).
- Refer to Kishore in the third person (e.g. "Kishore has experience with...").
- If the context doesn't contain the answer, say: "I don't have that specific detail, but feel free to reach out to Kishore directly at kishoresk0123@gmail.com."
- When someone asks about hiring or opportunities, note that Kishore is open to full-time roles starting May 2026.`;

// Groq uses the OpenAI-compatible SDK — completely free tier, very fast
async function generateWithGroq(question, context) {
  const { default: OpenAI } = await import('openai');
  const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
  });

  const completion = await groq.chat.completions.create({
    model: 'llama-3.1-8b-instant',   // Free, fast — 14,400 req/day on free tier
    messages: [
      {
        role: 'system',
        content: `${SYSTEM_PROMPT}\n\n--- CONTEXT ---\n${context}\n--- END CONTEXT ---`
      },
      { role: 'user', content: question }
    ],
    max_tokens: 400,
    temperature: 0.6,
  });

  return completion.choices[0].message.content?.trim() ?? '';
}

async function generateWithOpenAI(question, context) {
  const { default: OpenAI } = await import('openai');
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `${SYSTEM_PROMPT}\n\n--- CONTEXT ---\n${context}\n--- END CONTEXT ---`
      },
      { role: 'user', content: question }
    ],
    max_tokens: 400,
    temperature: 0.6,
  });

  return completion.choices[0].message.content?.trim() ?? '';
}

async function generateWithHuggingFace(question, context) {
  const { HfInference } = await import('@huggingface/inference');
  const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

  const prompt = `<|system|>
${SYSTEM_PROMPT}

--- CONTEXT ---
${context}
--- END CONTEXT ---
<|end|>
<|user|>
${question}
<|end|>
<|assistant|>`;

  const result = await hf.textGeneration({
    model: 'microsoft/Phi-3-mini-4k-instruct',
    inputs: prompt,
    parameters: {
      max_new_tokens: 300,
      temperature: 0.6,
      return_full_text: false,
      stop: ['<|end|>', '<|user|>'],
    },
  });

  return result.generated_text?.trim() ?? '';
}

/**
 * Fallback: return a templated answer from the top-matching chunk when
 * no LLM API key is configured.
 */
function fallbackAnswer(question, chunks) {
  if (!chunks.length || chunks[0].score === 0) {
    return "I don't have enough context to answer that. Please contact Kishore directly at kishoresk0123@gmail.com.";
  }
  const best = chunks[0];
  const preview = best.content.slice(0, 280).replace(/\n/g, ' ');
  return `Based on Kishore's portfolio (${best.section} – ${best.title}): ${preview}… For more details, visit the relevant section of this site or reach out at kishoresk0123@gmail.com.`;
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before asking again.' },
        { status: 429 }
      );
    }

    // Parse body
    const body = await request.json().catch(() => ({}));
    const { question } = body;

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return NextResponse.json({ error: 'A question is required.' }, { status: 400 });
    }

    if (question.length > 600) {
      return NextResponse.json({ error: 'Question is too long (max 600 characters).' }, { status: 400 });
    }

    // ── 1. Retrieve relevant context chunks ──────────────────────────────────
    const relevantChunks = retrieveRelevantChunks(question.trim(), 4);

    const context = relevantChunks
      .filter(c => c.score > 0)
      .map(c => `[${c.section} › ${c.title}]\n${c.content}`)
      .join('\n\n');

    // ── 2. Build citations ───────────────────────────────────────────────────
    const citations = relevantChunks
      .filter(c => c.score > 0)
      .slice(0, 3)
      .map(c => ({ title: c.title, section: c.section, url: c.url }));

    // ── 3. Generate answer ───────────────────────────────────────────────────
    let answer;

    if (process.env.GROQ_API_KEY) {
      answer = await generateWithGroq(question.trim(), context);
    } else if (process.env.OPENAI_API_KEY) {
      answer = await generateWithOpenAI(question.trim(), context);
    } else if (process.env.HUGGINGFACE_API_KEY) {
      answer = await generateWithHuggingFace(question.trim(), context);
    } else {
      // No API key configured — use template fallback
      answer = fallbackAnswer(question, relevantChunks);
    }

    return NextResponse.json({
      answer,
      citations,
      confidence: context ? 'high' : 'low',
    });

  } catch (err) {
    console.error('[/api/rag] Error:', err?.message ?? err);

    return NextResponse.json(
      {
        answer:
          'Sorry, I ran into an issue processing your question. Please try again, or reach out to Kishore directly at kishoresk0123@gmail.com.',
        citations: [],
        confidence: 'low',
      },
      { status: 200 }  // Return 200 so the client renders the fallback message
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
