import { NextResponse } from 'next/server';
import { Groq } from '@groq/groq-sdk';
import { getServerSession } from 'next-auth';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { topic, tone, contentType, keywords } = await req.json();
    const prompt = `Generate a LinkedIn ${contentType} about ${topic} with a ${tone} tone.${
      keywords ? ` Include these keywords: ${keywords}.` : ''
    } Make it engaging and professional with hashtags.`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a professional LinkedIn content creator.' },
        { role: 'user', content: prompt },
      ],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 1000,
    });

    return NextResponse.json({ content: completion.choices[0]?.message?.content || '' });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
} 