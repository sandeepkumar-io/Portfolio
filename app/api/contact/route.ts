import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

type ContactPayload = {
  email: string;
  message: string;
  name: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getStringField(
  payload: Record<string, unknown>,
  field: keyof ContactPayload,
  maxLength: number,
) {
  const value = payload[field];

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml({ email, message, name }: ContactPayload) {
  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; color: #020617;">New portfolio contact</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <div style="white-space: pre-wrap; padding: 16px; border-radius: 12px; background: #f1f5f9;">
        ${escapeHtml(message)}
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid form request." },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { message: "Invalid form request." },
      { status: 400 },
    );
  }

  const payload: ContactPayload = {
    email: getStringField(body, "email", 120),
    message: getStringField(body, "message", 2000),
    name: getStringField(body, "name", 80),
  };

  if (payload.name.length < 2) {
    return NextResponse.json(
      { message: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (payload.message.length < 10) {
    return NextResponse.json(
      { message: "Please write a message with at least 10 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Sandeep Portfolio <onboarding@resend.dev>";
  const recipients = process.env.CONTACT_TO_EMAIL?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (!apiKey || !recipients?.length) {
    return NextResponse.json(
      {
        message:
          "Contact email is not configured yet. Please add the Resend environment variables.",
      },
      { status: 500 },
    );
  }

  const resendResponse = await fetch(RESEND_API_URL, {
    body: JSON.stringify({
      from: fromEmail,
      html: buildEmailHtml(payload),
      reply_to: payload.email,
      subject: `New portfolio contact from ${payload.name}`,
      text: `New portfolio contact\n\nName: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
      to: recipients,
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!resendResponse.ok) {
    const errorDetails = await resendResponse.json().catch(() => null);
    console.error("Resend contact email failed", {
      details: errorDetails,
      status: resendResponse.status,
    });

    return NextResponse.json(
      { message: "Message could not be sent right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Message sent successfully. I will get back to you soon.",
  });
}
