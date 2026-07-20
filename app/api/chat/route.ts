import { NextResponse } from "next/server";
import { portfolioContext } from "@/lib/portfolioContext";

export const runtime = "nodejs";
export const maxDuration = 30;
export const dynamic = "force-dynamic";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

const MAX_MESSAGES = 6;
const MAX_MESSAGE_LENGTH = 1500;
const MODELS = ["gemini-3.1-flash-lite", "gemini-3.5-flash"];
const CONNECTION_TIMEOUT_MS = 12_000;

type GeminiError = {
  error?: { message?: string };
};

export async function GET() {
  return NextResponse.json({
    status: "ok",
    configured: Boolean(process.env.GEMINI_API_KEY),
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "The chatbot is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = Array.isArray(body.messages)
      ? body.messages
          .filter(
            (message): message is ChatMessage =>
              (message?.role === "user" || message?.role === "model") &&
              typeof message.text === "string" &&
              message.text.trim().length > 0,
          )
          .slice(-MAX_MESSAGES)
          .map((message) => ({
            role: message.role,
            parts: [{ text: message.text.trim().slice(0, MAX_MESSAGE_LENGTH) }],
          }))
      : [];

    if (!messages.length || messages[messages.length - 1].role !== "user") {
      return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
    }

    const requestBody = JSON.stringify({
      system_instruction: { parts: [{ text: portfolioContext }] },
      contents: messages,
      generationConfig: {
        temperature: 0.25,
        maxOutputTokens: 500,
      },
    });

    let response: Response | undefined;
    let errorData: GeminiError | null = null;

    for (let index = 0; index < MODELS.length; index += 1) {
      const model = MODELS[index];
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), CONNECTION_TIMEOUT_MS);
      try {
        response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-goog-api-key": apiKey,
            },
            body: requestBody,
            signal: controller.signal,
            cache: "no-store",
          },
        );
      } catch (fetchError) {
        console.error(`Gemini ${model} connection error:`, fetchError);
        response = undefined;
        continue;
      } finally {
        clearTimeout(timeout);
      }
      if (response.ok) break;

      errorData = (await response.json().catch(() => null)) as GeminiError | null;
      const isTemporary = response.status === 429 || response.status === 503;
      if (!isTemporary || index === MODELS.length - 1) break;
    }

    if (!response?.ok || !response.body) {
      console.error("Gemini API error:", response?.status, errorData?.error?.message);
      return NextResponse.json(
        { error: "The assistant is temporarily unavailable. Please try again." },
        { status: 502 },
      );
    }

    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    let buffer = "";

    const extractText = (event: string) => {
      const json = event
        .split("\n")
        .filter((line) => line.startsWith("data:"))
        .map((line) => line.slice(5).trim())
        .join("");
      if (!json || json === "[DONE]") return "";

      const chunk = JSON.parse(json);
      return (
        chunk?.candidates?.[0]?.content?.parts
          ?.map((part: { text?: string }) => part.text ?? "")
          .join("") ?? ""
      );
    };

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response!.body!.getReader();

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");
            const events = buffer.split("\n\n");
            buffer = events.pop() ?? "";

            for (const event of events) {
              const text = extractText(event);
              if (text) controller.enqueue(encoder.encode(text));
            }
          }
          buffer += decoder.decode().replace(/\r\n/g, "\n");
          if (buffer.trim()) {
            const text = extractText(buffer);
            if (text) controller.enqueue(encoder.encode(text));
          }
        } catch (streamError) {
          console.error("Gemini stream error:", streamError);
          controller.error(streamError);
          return;
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
