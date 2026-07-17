import type { Metadata } from "next";
import BookingCard from "@/app/components/services/BookingCard";
import ServiceEnquiryForm from "@/app/components/forms/ServiceEnquiryForm";
import { consultationTopics } from "@/data/services";

export const metadata: Metadata = {
  title: "1:1 AI & Data Consultation | Danish Shahzad",
  description: "Book a focused consultation to review an AI idea, RAG system, chatbot, automation opportunity, machine learning project, or technical learning plan.",
  openGraph: { title: "1:1 AI Consultation | Danish Shahzad", description: "Turn an AI or data idea into a clearer, realistic next step.", type: "website" },
};

export default function ConsultationPage() {
  return <main className="bg-white dark:bg-gray-900">
    <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 py-24 text-white"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6"><p className="font-semibold uppercase tracking-[0.2em] text-purple-300">Focused technical guidance</p><h1 className="mt-4 text-4xl font-bold md:text-6xl">1:1 AI &amp; Data Consultation</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">A focused consultation for individuals, founders, professionals, and small businesses deciding where and how data, automation, machine learning, or generative AI can improve their work.</p><p className="mx-auto mt-4 max-w-3xl text-slate-300">The session is designed to clarify the problem, assess realistic AI opportunities, identify suitable tools, and outline practical next steps without unnecessary complexity or exaggerated promises.</p></div></section>
    <section className="py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><h2 className="text-3xl font-bold text-gray-900 dark:text-white">Topics we can discuss</h2><ul className="mt-7 space-y-4 text-gray-600 dark:text-gray-300">{consultationTopics.map((topic) => <li key={topic} className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">• {topic}</li>)}</ul></div><div className="space-y-7"><BookingCard /><aside className="rounded-2xl border border-gray-200 p-7 dark:border-gray-700"><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Session format</h2><p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">30–60 minute focused online session. Before the call, share enough context to make the discussion focused and useful.</p><p className="mt-4 text-sm text-gray-500 dark:text-gray-400">The consultation provides technical and strategic guidance. It does not guarantee a specific business, financial, academic, or employment outcome.</p></aside></div></div></section>
    <section className="bg-gray-50 py-20 dark:bg-gray-800"><div className="mx-auto max-w-4xl px-4 sm:px-6"><ServiceEnquiryForm initialService="1:1 AI Consultation" /></div></section>
  </main>;
}
