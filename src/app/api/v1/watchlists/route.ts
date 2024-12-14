import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(
      { message: 'Get all watchlists' },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch watchlists' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json(
      { message: 'Added content to watchlist successfully' },
      { status: 201 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to add content to watchlist' },
      { status: 500 },
    );
  }
}
