import { runNewsAgent } from '@/lib/news_agent';
import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const result = await runNewsAgent();
        return NextResponse.json(result);
    } catch (error) {
        console.error("Agent execution failed:", error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
