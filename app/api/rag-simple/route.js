// app/api/rag-simple/route.js
// Simplified RAG without LLM for debugging

import { createClient } from '@supabase/supabase-js';
import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

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

export async function POST(req) {
    try {
        const { question } = await req.json();

        // Generate embedding
        const response = await hf.featureExtraction({
            model: 'sentence-transformers/all-MiniLM-L6-v2',
            inputs: question
        });

        const queryEmbedding = Array.isArray(response) && typeof response[0] === 'number'
            ? response
            : response[0];

        // Get all chunks from database
        const { data: chunks, error } = await supabase
            .from('portfolio_embeddings')
            .select('id, content, embedding, metadata');

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Calculate similarities
        const withSimilarity = chunks.map(chunk => ({
            content: chunk.content.substring(0, 100),
            title: chunk.metadata.title,
            section: chunk.metadata.section,
            similarity: cosineSimilarity(queryEmbedding, chunk.embedding)
        }));

        // Sort and get top 5
        const top = withSimilarity
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, 5);

        return NextResponse.json({
            question,
            top_matches: top,
            total_chunks: chunks.length
        });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({
            error: error.message,
            stack: error.stack
        }, { status: 500 });
    }
}
