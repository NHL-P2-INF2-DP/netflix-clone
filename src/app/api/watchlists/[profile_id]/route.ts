import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { profile_id: string } },
) {
  try {
    const { profile_id } = params;
    return NextResponse.json(
      { message: `Get watchlist for profile ID: ${profile_id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch watchlist' },
      { status: 500 },
    );
  }
}
