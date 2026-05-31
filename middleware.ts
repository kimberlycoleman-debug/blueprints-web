import { NextResponse, type NextRequest } from "next/server";

// Auth middleware disabled — dashboard and phases are accessible without login.
// To re-enable, restore Supabase auth check and protect these routes.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};

export const config = {
  matcher: ["/blueprints/dashboard/:path*", "/blueprints/phases/:path*"],
};
