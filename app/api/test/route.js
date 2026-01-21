// app/api/test/route.js
// Simple test endpoint

import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { question } = await req.json();

        return NextResponse.json({
            message: 'Test successful',
            question,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ message: 'API is working' });
}
