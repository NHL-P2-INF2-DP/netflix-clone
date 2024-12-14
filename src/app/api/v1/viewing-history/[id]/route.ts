import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { id } = await request.json();
    return NextResponse.json(
      { message: `Get viewing history with ID: ${id}` },
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

export async function PUT(request: NextRequest) {
  try {
    const { id, ...body } = await request.json();
    return NextResponse.json(
      { message: `Update viewing history with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to update viewing history' },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    return NextResponse.json(
      { message: `Delete viewing history with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete viewing history' },
      { status: 500 },
    );
  }
}
