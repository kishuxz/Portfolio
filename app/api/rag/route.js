// Context-engineered API endpoint for the portfolio chatbot.
// The public route remains /api/rag for compatibility with GitHub Pages fallback logic.

import { NextResponse } from 'next/server';
import { experiences, personalInfo, skillCategories } from '@/lib/content-config';
import { projectsKnowledge, workAuthorization } from '@/lib/portfolio-knowledge';

const CONTACT_EMAIL = 'kishoresk0123@gmail.com';

const ALLOWED_ORIGINS = new Set([
  'https://kishuxz.github.io',
  'https://portfolio-lpp8zzy4y-kishuxzs-projects.vercel.app',
]);

function buildCorsHeaders(origin) {
  const allowedOrigin = ALLOWED_ORIGINS.has(origin)
    ? origin
    : 'https://portfolio-lpp8zzy4y-kishuxzs-projects.vercel.app';

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

function jsonWithCors(data, init = {}, origin) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      ...buildCorsHeaders(origin),
      ...(init.headers ?? {}),
    },
  });
}

// Simple in-memory limiter. It resets on serverless cold starts.
const requestCounts = new Map();
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 60_000;

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

const VALID_INTENTS = ['project', 'experience', 'skill', 'background', 'workAuthorization', 'location', 'general'];

function classifyStrongIntent(query) {
  const q = query.toLowerCase();

  if (/(college|school|university|degree|education|graduat|gpa|where did he go)/.test(q)) {
    return 'background';
  }
  if (/(visa|sponsorship|h-?1b|opt|stem opt|work authorization|work permit|eligible to work|citizen|green card|immigration|when can (he|you) start|available to start|f-?1|ead)/.test(q)) {
    return 'workAuthorization';
  }
  if (/(location|relocate|relocation|city|base|based|remote|hybrid|onsite|in-person|willing to move|willing to relocate|time zone|geography|where is|where's|where does .* live|where .* located|move to)/.test(q)) {
    return 'location';
  }
  if (/(diarization|speaker|letterman|parameter golf|stackply|trusthire|job scheduler|cloud scheduler|truthlens|networkmap|covid|h1b|election)/.test(q)) {
    return 'project';
  }
  if (/(latest job|current job|latest role|current role|current research|where does he work|advisor)/.test(q)) {
    return 'experience';
  }

  return null;
}

function classifyIntentHeuristic(query) {
  const q = query.toLowerCase();

  if (/(visa|sponsorship|h-?1b|opt|stem opt|work authorization|work permit|eligible to work|citizen|green card|immigration|when can (he|you) start|available to start|f-?1|ead)/.test(q)) {
    return 'workAuthorization';
  }
  if (/(location|relocate|relocation|city|base|based|remote|hybrid|onsite|in-person|willing to move|willing to relocate|time zone|geography|where is|where's|where does .* live|where .* located|move to)/.test(q)) {
    return 'location';
  }
  if (/(skill|framework|tool|stack|language|know|certification|aws|pytorch|langgraph|spark|kafka|hpc)/.test(q)) {
    return 'skill';
  }
  if (/(job|role|experience|work|intern|research|assistant|latest|current|company|advisor|mrar|oneill|iviewsense)/.test(q)) {
    return 'experience';
  }
  if (/(project|diarization|parameter golf|stackply|trusthire|job scheduler|cloud scheduler|truthlens|networkmap|covid|h1b|election|portfolio|github|submission)/.test(q)) {
    return 'project';
  }
  if (/(college|school|university|degree|education|background|graduat|gpa|where did|who is|location|contact|email)/.test(q)) {
    return 'background';
  }

  return 'general';
}

async function classifyIntent(query) {
  const strongIntent = classifyStrongIntent(query);
  if (strongIntent) {
    return strongIntent;
  }

  if (!process.env.GROQ_API_KEY) {
    return classifyIntentHeuristic(query);
  }

  try {
    const { default: OpenAI } = await import('openai');
    const groq = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    });

    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content: 'Classify the user question into one of: project, experience, skill, background, workAuthorization, location, general. Reply with only the category.',
        },
        { role: 'user', content: query },
      ],
      max_tokens: 10,
      temperature: 0,
    });

    const intent = completion.choices[0].message.content?.trim().toLowerCase();
    return VALID_INTENTS.includes(intent) ? intent : classifyIntentHeuristic(query);
  } catch (error) {
    console.error('[chat intent] Falling back to heuristic:', error?.message ?? error);
    return classifyIntentHeuristic(query);
  }
}

function scoreText(query, text) {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter((word) => word.length > 2);
  const haystack = text.toLowerCase();

  return words.reduce((score, word) => score + (haystack.includes(word) ? 1 : 0), 0);
}

function formatKnowledgeProject(project) {
  const tags = project.tags?.join(', ') || 'Not specified';
  return [
    `Project: ${project.title}`,
    `Summary: ${project.summary}`,
    `Tags: ${tags}`,
    project.github ? `GitHub: ${project.github}` : null,
  ].filter(Boolean).join('\n');
}

function formatExperience(exp) {
  return [
    `Role: ${exp.role} at ${exp.company}`,
    `Date: ${exp.period}`,
    `Location: ${exp.location}`,
    exp.advisor || null,
    `Focus: ${exp.description}`,
    `Highlights:\n- ${exp.achievements.join('\n- ')}`,
    `Tech: ${exp.tech.join(', ')}`,
  ].filter(Boolean).join('\n');
}

function retrieveProjectContext(query) {
  const allProjects = [
    ...projectsKnowledge.featured.map((project) => ({ ...project, featured: true })),
    ...projectsKnowledge.earlierWork.map((project) => ({ ...project, featured: false })),
  ];

  const ranked = allProjects
    .map((project) => {
      const text = [
        project.title,
        project.summary,
        project.tags?.join(' '),
        project.github,
      ].filter(Boolean).join(' ');
      const featuredBoost = project.featured ? 3 : 0;
      return { project, score: featuredBoost + scoreText(query, text) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ project }) => project);

  return {
    context: ranked.map(formatKnowledgeProject).join('\n\n'),
    citations: ranked.slice(0, 3).map((project) => ({
      title: project.title,
      section: 'Projects',
      url: project.github || '#projects',
    })),
  };
}

function retrieveExperienceContext() {
  const recent = experiences.slice(0, 4);
  return {
    context: recent.map(formatExperience).join('\n\n'),
    citations: recent.slice(0, 3).map((exp) => ({
      title: exp.role,
      section: 'Experience',
      url: '#experience',
    })),
  };
}

function retrieveSkillContext() {
  return {
    context: skillCategories
      .map((category) => `${category.name}: ${category.skills.join(', ')}`)
      .join('\n'),
    citations: [{ title: 'Technical Stack', section: 'Skills', url: '#skills' }],
  };
}

function retrieveBackgroundContext() {
  return {
    context: `${personalInfo.name} is graduating with an MS in Data Science from Indiana University Bloomington in May 2026. He holds a B.Tech in Computer Science (AI & ML) from Sri Ramachandra Institute in Chennai, India. He is currently a Research Assistant on RT Project 2101 at Indiana University Media School, co-founder of Stackply, and an OpenAI Parameter Golf competitor. Stackply is an AI-native hiring platform he is co-founding; the hackathon MVP shipped as TrustHire AI and is public on GitHub. He is now scaling it with multi-provider LLM routing and vibe-coding detection as the moat. He is open to ML Engineer, Software Engineer, AI/LLM Engineer, Agentic Engineer, and Data Engineer roles and can relocate anywhere in the United States. Contact: ${CONTACT_EMAIL}.`,
    citations: [
      { title: 'Education', section: 'Background', url: '#education' },
      { title: 'Contact', section: 'Background', url: '#contact' },
    ],
  };
}

function retrieveWorkAuthorizationContext() {
  return {
    context: [
      `Current status: ${workAuthorization.currentStatus}`,
      `OPT details: ${workAuthorization.optDetails}`,
      `Sponsorship: ${workAuthorization.sponsorship}`,
      `Start date: ${workAuthorization.startDate}`,
      `Location: ${workAuthorization.location}`,
      `Sponsorship flexibility: ${workAuthorization.sponsorshipFlexibility}`,
      `Citizenship: ${workAuthorization.citizenship}`,
      `Contact: ${CONTACT_EMAIL}`,
    ].join('\n'),
    citations: [{ title: 'Work Authorization', section: 'Contact', url: '#contact' }],
  };
}

function retrieveLocationContext() {
  return {
    context: [
      `Location: ${workAuthorization.location}`,
      `Start date: ${workAuthorization.startDate}`,
      `Work authorization: ${workAuthorization.currentStatus}`,
      `Contact: ${CONTACT_EMAIL}`,
    ].join('\n'),
    citations: [{ title: 'Location & Availability', section: 'Contact', url: '#contact' }],
  };
}

function retrieveGeneralContext() {
  const featuredProjects = projectsKnowledge.featured.map(formatKnowledgeProject).join('\n\n');
  const recentExperience = experiences.slice(0, 2).map(formatExperience).join('\n\n');
  const coreSkills = skillCategories.slice(0, 4)
    .map((category) => `${category.name}: ${category.skills.slice(0, 6).join(', ')}`)
    .join('\n');

  return {
    context: `[FEATURED PROJECTS]\n${featuredProjects}\n\n[RECENT EXPERIENCE]\n${recentExperience}\n\n[CORE SKILLS]\n${coreSkills}`,
    citations: [
      { title: 'Featured Projects', section: 'Projects', url: '#projects' },
      { title: 'Recent Experience', section: 'Experience', url: '#experience' },
      { title: 'Technical Stack', section: 'Skills', url: '#skills' },
    ],
  };
}

function retrieveContext(intent, query) {
  switch (intent) {
    case 'project':
      return retrieveProjectContext(query);
    case 'experience':
      return retrieveExperienceContext();
    case 'skill':
      return retrieveSkillContext();
    case 'background':
      return retrieveBackgroundContext();
    case 'workAuthorization':
      return retrieveWorkAuthorizationContext();
    case 'location':
      return retrieveLocationContext();
    case 'general':
    default:
      return retrieveGeneralContext();
  }
}

function normalizeMessages(messages, fallbackQuestion) {
  if (!Array.isArray(messages)) {
    return [{ role: 'user', content: fallbackQuestion }];
  }

  return messages
    .filter((message) => ['user', 'assistant'].includes(message?.role) && typeof message?.content === 'string')
    .map((message) => ({
      role: message.role,
      content: message.content.slice(0, 1000),
    }))
    .slice(-10);
}

function compressHistory(messages) {
  const history = messages.slice(0, -1).filter((message) => message.role !== 'system').slice(-5);
  if (!history.length) return '';

  return history
    .map((message) => `${message.role}: ${message.content.replace(/\s+/g, ' ').slice(0, 220)}`)
    .join('\n');
}

function buildSystemPrompt(intent, retrievedContext, history) {
  return `You are Kishore Kumar Ramkumar's portfolio assistant.
Answer questions about Kishore's work using only the context below. Be concise, specific, and cite exact metrics and project names when relevant.
Refer to Kishore in the third person. If asked something not present in the context, say: "I don't have specific details on that, but you can reach Kishore at ${CONTACT_EMAIL}."
When asked about hiring, mention that Kishore is graduating in May 2026 and is open to ML, SDE, Data Engineering, LLM, and Agentic Engineering roles, and is open to relocate anywhere in the US.
When the detected intent is location, include both his current location and relocation/remote flexibility.

[INTENT DETECTED: ${intent}]

[RETRIEVED CONTEXT]
${retrievedContext}

${history ? `[COMPRESSED CONVERSATION HISTORY]\n${history}` : ''}`;
}

async function generateWithGroq(userQuestion, systemPrompt) {
  const { default: OpenAI } = await import('openai');
  const groq = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
  });

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userQuestion },
    ],
    max_tokens: 500,
    temperature: 0.3,
  });

  return completion.choices[0].message.content?.trim() ?? '';
}

async function generateWithOpenAI(userQuestion, systemPrompt) {
  const { default: OpenAI } = await import('openai');
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userQuestion },
    ],
    max_tokens: 500,
    temperature: 0.3,
  });

  return completion.choices[0].message.content?.trim() ?? '';
}

async function generateWithHuggingFace(userQuestion, systemPrompt) {
  const { HfInference } = await import('@huggingface/inference');
  const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

  const result = await hf.textGeneration({
    model: 'microsoft/Phi-3-mini-4k-instruct',
    inputs: `<|system|>\n${systemPrompt}\n<|end|>\n<|user|>\n${userQuestion}\n<|end|>\n<|assistant|>`,
    parameters: {
      max_new_tokens: 350,
      temperature: 0.3,
      return_full_text: false,
      stop: ['<|end|>', '<|user|>'],
    },
  });

  return result.generated_text?.trim() ?? '';
}

function fallbackAnswer(intent, context) {
  const firstBlock = context.split('\n\n')[0]?.replace(/\n/g, ' ').slice(0, 420);
  if (!firstBlock) {
    return `I don't have enough context to answer that. Please contact Kishore directly at ${CONTACT_EMAIL}.`;
  }
  return `Based on Kishore's portfolio context for ${intent}: ${firstBlock} For more detail, reach out at ${CONTACT_EMAIL}.`;
}

export async function POST(request) {
  const origin = request.headers.get('origin') ?? '';

  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    if (!checkRateLimit(ip)) {
      return jsonWithCors(
        { error: 'Too many requests. Please wait a moment before asking again.' },
        { status: 429 },
        origin
      );
    }

    const body = await request.json().catch(() => ({}));
    const question = typeof body.question === 'string'
      ? body.question.trim()
      : body.messages?.filter((message) => message?.role === 'user').at(-1)?.content?.trim();

    if (!question) {
      return jsonWithCors({ error: 'A question is required.' }, { status: 400 }, origin);
    }

    if (question.length > 600) {
      return jsonWithCors({ error: 'Question is too long (max 600 characters).' }, { status: 400 }, origin);
    }

    const messages = normalizeMessages(body.messages, question);
    const intent = await classifyIntent(question);
    const { context, citations } = retrieveContext(intent, question);
    const history = compressHistory(messages);
    const systemPrompt = buildSystemPrompt(intent, context, history);

    let answer;
    if (process.env.GROQ_API_KEY) {
      answer = await generateWithGroq(question, systemPrompt);
    } else if (process.env.OPENAI_API_KEY) {
      answer = await generateWithOpenAI(question, systemPrompt);
    } else if (process.env.HUGGINGFACE_API_KEY) {
      answer = await generateWithHuggingFace(question, systemPrompt);
    } else {
      answer = fallbackAnswer(intent, context);
    }

    return jsonWithCors(
      {
        answer,
        citations,
        confidence: context ? 'high' : 'low',
        intent,
      },
      {},
      origin
    );
  } catch (err) {
    console.error('[/api/rag] Error:', err?.message ?? err);

    return jsonWithCors(
      {
        answer: `Sorry, I ran into an issue processing your question. Please try again, or reach out to Kishore directly at ${CONTACT_EMAIL}.`,
        citations: [],
        confidence: 'low',
        intent: 'general',
      },
      { status: 200 },
      origin
    );
  }
}

export async function GET(request) {
  return jsonWithCors({ error: 'Method not allowed' }, { status: 405 }, request.headers.get('origin') ?? '');
}

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 204,
    headers: buildCorsHeaders(request.headers.get('origin') ?? ''),
  });
}
