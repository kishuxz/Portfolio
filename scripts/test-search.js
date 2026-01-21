// scripts/test-search.js
// Test the similarity search logic

const { createClient } = require('@supabase/supabase-js');
const { HfInference } = require('@huggingface/inference');
require('dotenv').config({ path: '.env.local' });

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

async function testSearch() {
    const question = "What are your ML skills?";
    console.log(`🔍 Testing search for: "${question}"\n`);

    // Generate query embedding
    const response = await hf.featureExtraction({
        model: 'sentence-transformers/all-MiniLM-L6-v2',
        inputs: question
    });

    const queryEmbedding = Array.isArray(response) && typeof response[0] === 'number'
        ? response
        : response[0];

    console.log(`Query embedding dimension: ${queryEmbedding.length}`);

    // Get all chunks
    const { data: chunks, error } = await supabase
        .from('portfolio_embeddings')
        .select('id, content, embedding, metadata')
        .limit(10);

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log(`\nFetched ${chunks.length} chunks from database`);
    console.log(`First chunk embedding dimension: ${chunks[0].embedding.length}`);
    console.log(`First chunk embedding type: ${typeof chunks[0].embedding}`);
    console.log(`Is array: ${Array.isArray(chunks[0].embedding)}\n`);

    // Calculate similarities
    console.log('Calculating similarities...\n');
    const withSimilarity = chunks.map((chunk, i) => {
        const sim = cosineSimilarity(queryEmbedding, chunk.embedding);
        console.log(`Chunk ${i + 1}: ${sim.toFixed(4)} - ${chunk.content.substring(0, 50)}...`);
        return {
            ...chunk,
            similarity: sim
        };
    });

    // Sort and filter
    const matches = withSimilarity
        .filter(c => c.similarity > 0.3)
        .sort((a, b) => b.similarity - a.similarity);

    console.log(`\n✅ Found ${matches.length} matches above 0.3 threshold`);

    if (matches.length > 0) {
        console.log('\nTop match:');
        console.log(`  Similarity: ${matches[0].similarity.toFixed(4)}`);
        console.log(`  Title: ${matches[0].metadata.title}`);
        console.log(`  Content: ${matches[0].content.substring(0, 100)}...`);
    }
}

testSearch()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
