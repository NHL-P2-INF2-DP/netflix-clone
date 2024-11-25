import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Clear the auth cookie
    cookies().delete('auth-token');

    return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
  }
  catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
