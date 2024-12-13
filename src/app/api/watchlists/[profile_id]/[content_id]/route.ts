import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const { profile_id, content_id } = await request.json();
    return NextResponse.json(
      {
        message: `Add content ${content_id} to watchlist for profile ${profile_id}`,
      },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to update watchlist' },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { profile_id, content_id } = await request.json();
    return NextResponse.json(
      {
        message: `Remove content ${content_id} from watchlist for profile ${profile_id}`,
      },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to update watchlist' },
      { status: 500 },
    );
  }
}
