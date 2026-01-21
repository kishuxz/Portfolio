import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Portfolio knowledge base - extracted from your components
const portfolioContext = `
ABOUT KISHORE KUMAR:
I am a Full-Stack Software Engineer with 3+ years of experience specializing in production systems, data engineering, and ML/LLM infrastructure.

TECHNICAL SKILLS:
- Cloud & Infrastructure: AWS, Azure, Docker, Kubernetes, Terraform, CircleCI
- Data Engineering: SQL, PostgreSQL, MySQL, MongoDB, Redis, Data Modeling
- Programming Languages: Python, JavaScript, Java, C++, TypeScript, R
- ML & LLMs: Scikit-learn, TensorFlow, LangChain, Prompt Engineering, ReAct, Batch Processing
- Big Data & ETL: Apache Airflow, PySpark, Spark, Hadoop
- Visualization & Tools: Power BI, Tableau, Git, Linux, VS Code, System Design

WORK EXPERIENCE:
- Current role involves building production systems across full-stack development
- Experience with data engineering and ML/LLM infrastructure
- Worked with 8+ companies throughout career
- Completed 15+ major projects

EDUCATION & CREDENTIALS:
- University education in Computer Science/Engineering
- AWS Certifications
- Google Cloud Certifications
- TensorFlow Certifications
- Kubernetes Certifications

NOTABLE ACHIEVEMENTS:
- Multiple hackathon wins
- Recognition for technical excellence
- Strong background in system design and scalable solutions

PROJECT PORTFOLIO:
- Featured projects in ML/AI, web development, and data engineering
- Experience with end-to-end system development
- Focus on production-ready, scalable solutions
`;

export async function POST(req) {
    try {
        const { message } = await req.json();

        if (!message || message.trim().length === 0) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // Create a system prompt that uses RAG context
        const systemPrompt = `You are an AI assistant representing Kishore Kumar, a software engineer. 
Your role is to answer questions about Kishore's experience, skills, projects, and background based on the provided context.

IMPORTANT RULES:
1. Only answer questions based on the provided portfolio context
2. If asked about something not in the context, politely say you don't have that information
3. Be concise, professional, and friendly
4. Highlight relevant technical skills and experience
5. Don't make up information - stick to the facts in the context

PORTFOLIO CONTEXT:
${portfolioContext}

Answer the user's questions naturally and professionally.`;

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: 'gpt-4-turbo-preview',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: message },
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        const response = completion.choices[0].message.content;

        return NextResponse.json({
            response,
            success: true,
        });

    } catch (error) {
        console.error('Chat API Error:', error);

        // Handle OpenAI API errors
        if (error.code === 'insufficient_quota') {
            return NextResponse.json(
                { error: 'API quota exceeded. Please try again later.' },
                { status: 429 }
            );
        }

        return NextResponse.json(
            { error: 'An error occurred processing your request' },
            { status: 500 }
        );
    }
}
