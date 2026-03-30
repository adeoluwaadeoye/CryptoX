import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import type { Session } from "next-auth";

export async function GET() {
  try {
    const session: Session | null = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { user: null, authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        user: session.user,
        authenticated: true,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Internal server error";

    return NextResponse.json(
      {
        error: message,
        authenticated: false,
      },
      { status: 500 }
    );
  }
}