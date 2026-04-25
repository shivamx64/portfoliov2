import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { recordVisitor } from "@/lib/visitors";
import { visitorPayloadSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = (await request.json()) as unknown;
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const parsed = visitorPayloadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: parsed.error.issues[0]?.message ?? "Invalid visitor payload.",
      },
      { status: 400 },
    );
  }

  try {
    const count = await recordVisitor(parsed.data.pagePath, request);

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Visitor tracking failed:", error);

    return NextResponse.json(
      { message: "Visitor count is unavailable right now." },
      { status: 500 },
    );
  }
}

