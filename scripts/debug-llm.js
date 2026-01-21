
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function testLLM() {
    console.log("Testing LLM generation with raw fetch...");
    console.log("API Key present:", !!process.env.HUGGINGFACE_API_KEY);

    const model = 'Qwen/Qwen2.5-Coder-32B-Instruct';
    const url = `https://router.huggingface.co/v1/chat/completions`;

    try {
        console.log(`Calling fetch to ${url}...`);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model,
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: "What is 2 + 2?" }
                ],
                max_tokens: 50,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP Error: ${response.status} - ${errorBody}`);
        }

        const data = await response.json();
        console.log("Response received:");
        console.log(JSON.stringify(data, null, 2));

    } catch (error) {
        console.error("LLM Error:", error);
    }
}

testLLM();
