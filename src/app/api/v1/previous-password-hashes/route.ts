import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(
      { message: 'Get all password hashes' },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch password hashes' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json(
      { message: 'Password hash added successfully' },
      { status: 201 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to add password hash' },
      { status: 500 },
    );
  }
}
