// app/api/rag/route.js
// RAG Chatbot API with JSONB embeddings
// Using raw fetch to Hugging Face Inference API (Router)

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Configuration for Hugging Face Router
const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const EMBEDDING_MODEL = 'BAAI/bge-small-en-v1.5';
const LLM_MODEL = 'Qwen/Qwen2.5-Coder-32B-Instruct';

// Helper: Raw Fetch Wrapper
async function hfFetch(url, payload) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${HF_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HF API Error: ${response.status} - ${errorText}`);
    }

    return await response.json();
}

// Generate embedding for query
async function generateQueryEmbedding(query) {
    const url = `https://router.huggingface.co/hf-inference/models/${EMBEDDING_MODEL}`;

    // Using simple feature extraction format
    const data = await hfFetch(url, {
        inputs: [query],
        options: { wait_for_model: true }
    });

    // Expect [[0.1, ...]] format
    if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) {
        return data[0];
    }

    throw new Error(`Unexpected embedding format: ${JSON.stringify(data).substring(0, 100)}`);
}

// Cosine similarity calculation
function cosineSimilarity(a, b) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Search portfolio using JSONB embeddings
async function searchPortfolio(queryEmbedding, threshold = 0.2, limit = 5) {
    // Get all chunks
    const { data: chunks, error } = await supabase
        .from('portfolio_embeddings')
        .select('id, content, embedding, metadata');

    if (error) throw error;

    // Calculate similarities in JavaScript
    const withSimilarity = chunks.map(chunk => ({
        ...chunk,
        similarity: cosineSimilarity(queryEmbedding, chunk.embedding)
    }));

    // Filter and sort
    return withSimilarity
        .filter(chunk => chunk.similarity > threshold)
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit);
}

// Generate answer using LLM
async function generateGroundedAnswer(question, context) {
    const url = `https://router.huggingface.co/v1/chat/completions`;

    const systemPrompt = `You are a helpful AI assistant for Kishore Kumar's portfolio.
    Use the following CONTEXT to answer the user's QUESTION.
    
    RULES:
    1. Answer ONLY based on the provided context.
    2. If the context doesn't contain the answer, say "I don't have that information in my portfolio."
    3. Be professional, concise, and friendly.
    4. Keep answers short (under 3-4 sentences) unless asked for details.
    
    CONTEXT:
    ${context}`;

    const payload = {
        model: LLM_MODEL,
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: question }
        ],
        max_tokens: 300,
        temperature: 0.7
    };

    const data = await hfFetch(url, payload);

    if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content.trim();
    }

    throw new Error('No answer generated from LLM');
}

// Track analytics
async function logAnalytics(type, question, responseTime, chunksRetrieved, error = null) {
    try {
        await supabase.from('chat_analytics').insert({
            type,
            question,
            response_time_ms: responseTime,
            chunks_retrieved: chunksRetrieved,
            error
        });
    } catch (err) {
        console.error('Analytics logging failed:', err);
    }
}

export async function POST(req) {
    const startTime = Date.now();

    try {
        const { question } = await req.json();

        if (!question || question.trim().length === 0) {
            return NextResponse.json(
                { error: 'Question is required' },
                { status: 400 }
            );
        }

        // 1. Generate embedding for question
        const queryEmbedding = await generateQueryEmbedding(question);

        // 2. Search for relevant chunks
        const chunks = await searchPortfolio(queryEmbedding, 0.4, 5); // Raised threshold slightly for better precision

        // 3. Check if we have relevant context
        if (!chunks || chunks.length === 0) {
            const responseTime = Date.now() - startTime;
            await logAnalytics('chatbot', question, responseTime, 0);

            return NextResponse.json({
                answer: "I don't have that information in my documented work. I can answer questions about my projects, skills, and experience.",
                citations: [],
                confidence: 'none'
            });
        }

        // 4. Build context from retrieved chunks
        const context = chunks.map(chunk => chunk.content).join('\n\n');

        // 5. Generate grounded answer
        const answer = await generateGroundedAnswer(question, context);

        // 6. Extract citations
        const citations = chunks.map(chunk => ({
            title: chunk.metadata.title,
            section: chunk.metadata.section,
            url: chunk.metadata.url,
            similarity: chunk.similarity
        }));

        // 7. Calculate confidence
        const avgSimilarity = chunks.reduce((sum, c) => sum + c.similarity, 0) / chunks.length;
        const confidence = avgSimilarity > 0.6 ? 'high' : avgSimilarity > 0.4 ? 'medium' : 'low';

        const responseTime = Date.now() - startTime;
        await logAnalytics('chatbot', question, responseTime, chunks.length);

        return NextResponse.json({
            answer,
            citations,
            confidence,
            chunks_used: chunks.length
        });

    } catch (error) {
        console.error('RAG API Error:', error);

        const responseTime = Date.now() - startTime;
        await logAnalytics('chatbot', req.body?.question, responseTime, 0, error.message);

        return NextResponse.json(
            { error: 'An error occurred while processing your question. Please try again.' },
            { status: 500 }
        );
    }
}
