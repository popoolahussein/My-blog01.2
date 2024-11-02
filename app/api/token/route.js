import { NextResponse } from 'next/server';

export async function GET() {
  // Access the secret token from environment variables
  const secretToken = process.env.MY_SECRET_TOKEN;

  // Log the token for server-side checks (remove this in production)
  console.log('Secret Token:', secretToken);

  // Return the secret token or use it for some logic
  return NextResponse.json({ secretToken }, { status: 200 });
}
