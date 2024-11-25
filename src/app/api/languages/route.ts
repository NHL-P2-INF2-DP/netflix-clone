import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ message: 'Get all languages' }, { status: 200 });
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch languages' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json(
      { message: 'Language created successfully' },
      { status: 201 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to create language' },
      { status: 500 },
    );
  }
}
