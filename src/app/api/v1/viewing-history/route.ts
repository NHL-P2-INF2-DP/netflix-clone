import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(
      { message: 'Get all viewing history' },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch viewing history' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json(
      { message: 'Viewing history record created successfully' },
      { status: 201 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to create viewing history record' },
      { status: 500 },
    );
  }
}
