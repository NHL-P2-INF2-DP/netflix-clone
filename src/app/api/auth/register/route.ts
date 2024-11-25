import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 201 },
    );
  }
  catch (error) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
