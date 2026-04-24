import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = (await request.json()) as unknown;
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: parsed.error.issues[0]?.message ?? "Invalid payload.",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Thanks for reaching out. This placeholder route is ready for email or webhook integration.",
  });
}
