import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    return NextResponse.json(
      { message: `Get user with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const body = await request.json();
    return NextResponse.json(
      { message: `Update user with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    return NextResponse.json(
      { message: `Delete user with ID: ${id}` },
      { status: 200 },
    );
  }
  catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 },
    );
  }
}
