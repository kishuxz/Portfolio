// app/api/rag/route.js
// RAG Chatbot API with JSONB embeddings

import { createClient } from '@supabase/supabase-js';
import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Generate embedding for query
async function generateQueryEmbedding(query) {
    const response = await hf.featureExtraction({
        model: 'sentence-transformers/all-MiniLM-L6-v2',
        inputs: query
    });

    // Response is a 384-dim array
    if (Array.isArray(response) && typeof response[0] === 'number') {
        return response;
    }

    if (Array.isArray(response[0]) && typeof response[0][0] === 'number') {
        return response[0];
    }

    throw new Error(`Unexpected embedding format`);
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
    const prompt = `You are an AI assistant for Kishore Kumar's portfolio. You MUST follow these rules strictly:

CRITICAL RULES:
1. Answer ONLY based on the provided context below
2. If the context doesn't contain enough information to answer, say: "I don't have that information in my portfolio"
3. Be professional, concise, and specific
4. When mentioning projects or skills, be direct and factual
5. DO NOT make assumptions or use general knowledge
6. DO NOT invent experience or achievements

CONTEXT:
${context}

QUESTION: ${question}

ANSWER (be concise and grounded in the context):`;

    try {
        const response = await hf.textGeneration({
            model: 'mistralai/Mistral-7B-Instruct-v0.2',
            inputs: prompt,
            parameters: {
                max_new_tokens: 300,
                temperature: 0.7,
                top_p: 0.9,
                return_full_text: false
            }
        });

        return response.generated_text.trim();
    } catch (error) {
        console.error('LLM Error:', error);
        throw new Error('Failed to generate answer');
    }
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

        if (question.length > 500) {
            return NextResponse.json(
                { error: 'Question too long (max 500 characters)' },
                { status: 400 }
            );
        }

        // 1. Generate embedding for question
        const queryEmbedding = await generateQueryEmbedding(question);

        // 2. Search for relevant chunks
        const chunks = await searchPortfolio(queryEmbedding, 0.2, 5);

        // 3. Check if we have relevant context
        if (!chunks || chunks.length === 0) {
            const responseTime = Date.now() - startTime;
            await logAnalytics('chatbot', question, responseTime, 0);

            return NextResponse.json({
                answer: "I don't have that information in my portfolio. I can only answer questions about my documented work, skills, projects, and experience.",
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
            source: chunk.metadata.source,
            similarity: chunk.similarity
        }));

        // 7. Calculate confidence
        const avgSimilarity = chunks.reduce((sum, c) => sum + c.similarity, 0) / chunks.length;
        const confidence = avgSimilarity > 0.7 ? 'high' : avgSimilarity > 0.5 ? 'medium' : 'low';

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
