// scripts/test-embedding.js
// Test embedding generation to see actual response format

const { HfInference } = require('@huggingface/inference');
require('dotenv').config({ path: '.env.local' });

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

async function testEmbedding() {
    const testText = "Machine learning skills";

    console.log('Testing embedding generation...\n');
    console.log(`Input: "${testText}"\n`);

    const response = await hf.featureExtraction({
        model: 'sentence-transformers/all-MiniLM-L6-v2',
        inputs: testText
    });

    console.log('Response type:', typeof response);
    console.log('Is array:', Array.isArray(response));

    if (Array.isArray(response)) {
        console.log('Length:', response.length);
        console.log('First element type:', typeof response[0]);
        console.log('First element is array:', Array.isArray(response[0]));

        if (Array.isArray(response[0])) {
            console.log('First element length:', response[0].length);
            console.log('First element[0] type:', typeof response[0][0]);
            console.log('First element[0] is array:', Array.isArray(response[0][0]));

            if (Array.isArray(response[0][0])) {
                console.log('First element[0] length:', response[0][0].length);
            } else {
                console.log('Sample values:', response[0].slice(0, 5));
            }
        } else {
            console.log('Sample values:', response.slice(0, 5));
        }
    }

    console.log('\nFull structure:');
    console.log(JSON.stringify(response).substring(0, 200) + '...');
}

testEmbedding()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
