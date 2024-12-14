import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { profile_id } = await request.json();
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
