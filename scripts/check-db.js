// scripts/check-db.js
// Simple script to check what's actually stored

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function checkDatabase() {
    console.log('📊 Checking database...\n');

    // Count total rows
    const { count, error: countError } = await supabase
        .from('portfolio_embeddings')
        .select('*', { count: 'exact', head: true });

    if (countError) {
        console.error('Error:', countError);
        return;
    }

    console.log(`Total chunks: ${count}`);

    // Get one sample
    const { data, error } = await supabase
        .from('portfolio_embeddings')
        .select('id, content, embedding, metadata')
        .limit(1)
        .single();

    if (error) {
        console.error('Error:', error);
        return;
    }

    if (data) {
        console.log(`\nSample chunk ID: ${data.id}`);
        console.log(`Content preview: ${data.content.substring(0, 80)}...`);
        console.log(`Embedding dimension: ${data.embedding.length}`);
        console.log(`Metadata:`, JSON.stringify(data.metadata, null, 2));
    } else {
        console.log('No data found!');
    }
}

checkDatabase()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('Failed:', err);
        process.exit(1);
    });
