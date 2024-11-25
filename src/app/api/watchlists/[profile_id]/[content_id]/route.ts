import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { profile_id: string; content_id: string } },
) {
  try {
    const { profile_id, content_id } = params;
    return NextResponse.json(
      {
        message: `Remove content ${content_id} from watchlist of profile ${profile_id}`,
      },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to remove content from watchlist' },
      { status: 500 },
    );
  }
}
