import { NextRequest, NextResponse } from "next/server";
import { verifyPostPassword } from "@/lib/api";

export async function POST(request: NextRequest) {
  const { slug, password } = await request.json();

  if (!slug || !password) {
    return NextResponse.json({ error: "Missing slug or password" }, { status: 400 });
  }

  if (!verifyPostPassword(slug, password)) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(`unlocked_${slug}`, "true", {
    httpOnly: true,
    maxAge: 60 * 60, // 1 hour
    path: "/",
    sameSite: "strict",
  });

  return response;
}
