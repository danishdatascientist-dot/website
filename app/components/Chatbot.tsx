"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

type Message = {
  role: "user" | "model";
  text: string;
};

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
          <strong key={index} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
          );
        }

        if (/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(part)) {
          return (
            <a
              key={index}
              href={`mailto:${part}`}
              className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
            >
              {part}
            </a>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function FormattedMessage({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-2">
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n");
        const isList = lines.every((line) => /^\s*[-*]\s+/.test(line));

        if (isList) {
          return (
            <ul key={blockIndex} className="list-disc space-y-1 pl-5">
              {lines.map((line, lineIndex) => (
                <li key={lineIndex}>
                  <InlineText text={line.replace(/^\s*[-*]\s+/, "")} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={blockIndex}>
            {lines.map((line, lineIndex) => (
              <span key={lineIndex}>
                {lineIndex > 0 && <br />}
                <InlineText text={line} />
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

const welcome: Message = {
  role: "model",
  text: `👋 Hi! I'm Danish Shahzad's AI Portfolio Assistant.

Ask me anything about Danish's experience, AI projects, skills, education, tutoring, or services.

📧 You can also contact Danish directly at:
danish.datascientist@gmail.com`,
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user" as const, text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 40_000);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: nextMessages.slice(1),
        }),
      });
      window.clearTimeout(timeout);

      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "I’m temporarily unavailable. Please try again.");
      }

      setMessages((current) => [...current, { role: "model", text: "" }]);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((current) => {
          const updated = [...current];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = { ...last, text: last.text + chunk };
          return updated;
        });
      }

      setMessages((current) => {
        const last = current[current.length - 1];
        if (last?.role === "model" && !last.text.trim()) {
          return [
            ...current.slice(0, -1),
            { role: "model", text: "I couldn't generate a response. Please try again." },
          ];
        }
        return current;
      });
    } catch (error) {
      const errorText =
        error instanceof DOMException && error.name === "AbortError"
          ? "The response took too long. Please try again."
          : error instanceof Error
            ? error.message
            : "I couldn't connect right now. Please try again shortly.";
      setMessages((current) => {
        const last = current[current.length - 1];
        if (last?.role === "model" && !last.text.trim()) {
          return [...current.slice(0, -1), { role: "model", text: errorText }];
        }
        return [...current, { role: "model", text: errorText }];
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {open && (
        <section
          aria-label="Portfolio chatbot"
          className="mb-4 flex h-[min(70vh,560px)] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900 sm:w-96"
        >
          <header className="flex items-center justify-between bg-primary px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/15 p-2"><Bot size={20} /></span>
              <div>
                <h2 className="font-semibold">Ask about Danish</h2>
                <p className="text-xs text-white/80">Gemini-powered assistant</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot" className="rounded-lg p-2 hover:bg-white/15">
              <X size={20} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4 dark:bg-gray-950">
            {messages.map((message, index) => message.text ? (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto rounded-br-md bg-primary text-white"
                    : "rounded-bl-md border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                }`}
              >
                <FormattedMessage text={message.text} />
              </div>
            ) : null)}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="w-fit rounded-2xl rounded-bl-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800">
                Thinking…
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={sendMessage} className="flex gap-2 border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900">
            <label htmlFor="chat-message" className="sr-only">Message</label>
            <input
              id="chat-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={1500}
              placeholder="Ask about skills, projects…"
              className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="rounded-xl bg-primary p-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </section>
      )}

      <button
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        aria-expanded={open}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
