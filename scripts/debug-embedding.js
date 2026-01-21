// scripts/debug-embedding.js
// Debug script to see exactly what we're storing

const { HfInference } = require('@huggingface/inference');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function debugEmbedding() {
    const testText = "Machine learning and data science";

    console.log('🔍 Generating embedding...\n');

    const response = await hf.featureExtraction({
        model: 'sentence-transformers/all-MiniLM-L6-v2',
        inputs: testText
    });

    console.log('Raw response type:', typeof response);
    console.log('Is array:', Array.isArray(response));
    console.log('Length:', response.length);
    console.log('First element type:', typeof response[0]);
    console.log('First 5 values:', response.slice(0, 5));

    let embedding;

    // Apply same logic as ingestion script
    if (Array.isArray(response) && typeof response[0] === 'number') {
        embedding = response;
        console.log('\n✅ Using direct array');
    } else if (Array.isArray(response[0]) && typeof response[0][0] === 'number') {
        embedding = response[0];
        console.log('\n✅ Using response[0]');
    } else {
        console.log('\n❌ Unexpected format!');
        return;
    }

    console.log('\nFinal embedding dimension:', embedding.length);

    // Test storing it
    console.log('\n📝 Testing database insert...');
    const { data, error } = await supabase
        .from('portfolio_embeddings')
        .insert({
            content: testText,
            embedding,
            metadata: { test: true }
        })
        .select()
        .single();

    if (error) {
        console.error('❌ Error:', error);
        return;
    }

    console.log('✅ Inserted successfully');
    console.log('Stored embedding dimension:', data.embedding.length);

    // Clean up
    await supabase.from('portfolio_embeddings').delete().eq('id', data.id);
    console.log('🧹 Test data cleaned up');
}

debugEmbedding()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
