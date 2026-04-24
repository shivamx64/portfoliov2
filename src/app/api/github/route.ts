import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/api/github/contributions", request.url),
    307,
  );
}
