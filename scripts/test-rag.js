// scripts/test-rag.js
// Test RAG system to debug vector search issues

const { createClient } = require('@supabase/supabase-js');
const { HfInference } = require('@huggingface/inference');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

async function testRAG() {
    console.log('🔍 Testing RAG System...\n');

    // 1. Check if data exists
    const { data: allChunks, error: countError } = await supabase
        .from('portfolio_embeddings')
        .select('id, content', { count: 'exact', head: false })
        .limit(3);

    if (countError) {
        console.error('❌ Error fetching data:', countError);
        return;
    }

    console.log(`✅ Found ${allChunks.length} chunks in database`);
    console.log('Sample chunk:', allChunks[0]?.content?.substring(0, 100) + '...\n');

    // 2. Test embedding generation
    const testQuery = "What are your ML skills?";
    console.log(`📝 Testing query: "${testQuery}"`);

    const embedding = await hf.featureExtraction({
        model: 'sentence-transformers/all-MiniLM-L6-v2',
        inputs: testQuery
    });

    const queryEmbedding = Array.isArray(embedding[0]) ? embedding[0] : embedding;
    console.log(`✅ Generated embedding (dimension: ${queryEmbedding.length})\n`);

    // 3. Test direct similarity search (lowered threshold)
    console.log('🔍 Testing vector search with threshold 0.3...');
    const { data: results, error: searchError } = await supabase.rpc('match_documents', {
        query_embedding: queryEmbedding,
        match_threshold: 0.3,  // Lower threshold for testing
        match_count: 5
    });

    if (searchError) {
        console.error('❌ Search error:', searchError);
        return;
    }

    console.log(`✅ Found ${results?.length || 0} matching chunks\n`);

    if (results && results.length > 0) {
        console.log('Top results:');
        results.forEach((r, i) => {
            console.log(`${i + 1}. Similarity: ${r.similarity.toFixed(3)}`);
            console.log(`   Source: ${r.metadata.title}`);
            console.log(`   Content: ${r.content.substring(0, 80)}...\n`);
        });
    } else {
        console.log('❌ No results found. This indicates an issue with:\n');
        console.log('   - Embedding dimension mismatch');
        console.log('   - Vector index not working');
        console.log('   - Embeddings not properly stored\n');

        // Test with a sample chunk
        console.log('🔍 Testing with sample chunk from database...');
        const { data: sampleChunk } = await supabase
            .from('portfolio_embeddings')
            .select('embedding')
            .limit(1)
            .single();

        if (sampleChunk?.embedding) {
            console.log(`Sample embedding dimension: ${sampleChunk.embedding.length}`);
            console.log(`Query embedding dimension: ${queryEmbedding.length}`);

            if (sampleChunk.embedding.length !== queryEmbedding.length) {
                console.log('❌ DIMENSION MISMATCH! This is the problem.');
            }
        }
    }
}

testRAG()
    .then(() => process.exit(0))
    .catch(error => {
        console.error('Test failed:', error);
        process.exit(1);
    });
