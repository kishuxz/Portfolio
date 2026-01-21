
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function testEmbedding() {
    console.log("Testing Embedding generation with BAAI/bge-small-en-v1.5...");

    const model = 'BAAI/bge-small-en-v1.5';
    // Reverting to the endpoint that actually connected (gave 400, not 404)
    const url = `https://router.huggingface.co/hf-inference/models/${model}`;

    const text = "This is a test sentence.";

    try {
        console.log(`Calling fetch to ${url}...`);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: [text],
                options: { wait_for_model: true }
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP Error: ${response.status} - ${errorBody}`);
        }

        const data = await response.json();
        console.log("Response received.");
        console.log("Is array?", Array.isArray(data));
        // Feature extraction typically returns [ [embedding_values...] ] for batch input
        if (Array.isArray(data) && data.length > 0) {
            const firstItem = data[0];
            console.log("First item type:", typeof firstItem);
            console.log("First item is array?", Array.isArray(firstItem));
            if (Array.isArray(firstItem)) {
                console.log("Embedding dimensions:", firstItem.length);
            }
        }
        console.log("Full data:", JSON.stringify(data).substring(0, 100) + "...");

    } catch (error) {
        console.error("Embedding Error:", error);
    }
}

testEmbedding();
