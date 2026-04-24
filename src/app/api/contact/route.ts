import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

const successMessage =
  "Thanks for reaching out. Your message was sent successfully.";

type ContactEnv = {
  apiKey: string;
  to: string;
  from: string;
};

class ContactConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactConfigurationError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasFilledHoneypot(body: unknown) {
  return (
    isRecord(body) &&
    typeof body.website === "string" &&
    body.website.trim().length > 0
  );
}

function getContactEnv(): ContactEnv {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !to || !from) {
    throw new ContactConfigurationError(
      "Contact form email delivery is not configured.",
    );
  }

  return { apiKey, to, from };
}

function buildPlainTextEmail(values: ContactFormValues) {
  return [
    "New portfolio contact message",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Subject: ${values.subject}`,
    "",
    "Message:",
    values.message,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = (await request.json()) as unknown;
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  if (hasFilledHoneypot(body)) {
    return NextResponse.json({ ok: true, message: successMessage });
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: parsed.error.issues[0]?.message ?? "Invalid payload.",
      },
      { status: 400 },
    );
  }

  let env: ContactEnv;

  try {
    env = getContactEnv();
  } catch {
    console.error("Contact form email delivery is not configured.");

    return NextResponse.json(
      {
        message:
          "Contact form email delivery is not configured. Please try again later.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(env.apiKey);

  try {
    const { error } = await resend.emails.send({
      to: env.to,
      from: env.from,
      replyTo: parsed.data.email,
      subject: `[Portfolio] ${parsed.data.subject}`,
      text: buildPlainTextEmail(parsed.data),
    });

    if (error) {
      console.error("Resend contact email failed:", error);

      return NextResponse.json(
        {
          message:
            "Your message could not be sent right now. Please try again later.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Unexpected contact email failure:", error);

    return NextResponse.json(
      {
        message:
          "Your message could not be sent right now. Please try again later.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, message: successMessage });
}
