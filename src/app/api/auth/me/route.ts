import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies(); // ✅ FIX: await here

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const decoded = verifyToken(token);

    return NextResponse.json(
      { user: decoded },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { user: null },
      { status: 401 }
    );
  }
}