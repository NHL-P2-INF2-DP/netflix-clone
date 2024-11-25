import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 401 },
    );
  }
}
