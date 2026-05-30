import { NextResponse } from "next/server";
import { setSession } from "@/src/auth/session";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/?error=missing_token", req.url));
  }

  setSession(token);

  return NextResponse.redirect(new URL("/dashboard", req.url));
}
