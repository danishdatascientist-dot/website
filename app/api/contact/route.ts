import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 15;

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string;
};

const limits = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
};

const attempts = new Map<string, { count: number; resetAt: number }>();

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);

  if (!current || current.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }

  current.count += 1;
  return current.count > 5;
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    configured: Boolean(process.env.RESEND_API_KEY),
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The contact form is not configured yet." },
      { status: 503 },
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  try {
    const body = (await request.json()) as ContactRequest;
    if (body.company?.trim()) {
      return NextResponse.json({ success: true });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
    }

    if (
      name.length > limits.name ||
      email.length > limits.email ||
      subject.length > limits.subject ||
      message.length > limits.message
    ) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const to = process.env.CONTACT_EMAIL || "danish.datascientist@gmail.com";
    const from = process.env.RESEND_FROM_EMAIL || "Portfolio Website <onboarding@resend.dev>";
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio enquiry: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
        html: `
          <h2>New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
        `,
      }),
      cache: "no-store",
    });

    const result = await resendResponse.json().catch(() => null);
    if (!resendResponse.ok) {
      console.error("Resend error:", resendResponse.status, result?.message);
      return NextResponse.json(
        { error: "Your message could not be sent. Please email Danish directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
