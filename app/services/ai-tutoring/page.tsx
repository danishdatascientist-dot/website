import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import ServiceEnquiryForm from "@/app/components/forms/ServiceEnquiryForm";
import { aiEraLearningTrack, extendedAiRoadmap, lessonFormats, lessonSteps, tutoringAudience, tutoringCurriculum, tutoringSessionOptions } from "@/data/services";

export const metadata: Metadata = {
  title: "AI, Python & Data Science Tutoring | Danish Shahzad",
  description: "Personalised one-to-one tutoring in Python, data science, machine learning, deep learning, RAG, chatbots, LangChain, LangGraph, MCP, FastAPI, and Streamlit.",
  openGraph: { title: "AI Tutoring | Danish Shahzad", description: "Personalised, practical AI lessons with live explanation and guided coding.", type: "website" },
};

export default function AiTutoringPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 py-24 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="font-semibold uppercase tracking-[0.2em] text-purple-300">Personalised learning</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">AI, Data Science &amp; Python Tutoring</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Hands-on, project-based one-to-one lessons in Python, data science, machine learning, deep learning, generative AI, RAG systems, chatbots, LangChain, LangGraph, MCP, automation, and practical AI application development.</p>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">Lessons are adapted to the learner&apos;s current level, goals, and preferred pace. The focus is on understanding concepts through practical exercises, guided coding, debugging, and real projects rather than only watching lectures or memorising theory.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-wider text-primary">Extended curriculum</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">19-stage AI engineering learning roadmap</h2>
            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">This roadmap can be adapted into individual lessons or a longer learning plan. Beginners start with the foundations; advanced, infrastructure, and production topics are introduced according to the learner&apos;s background and project needs.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {extendedAiRoadmap.map(([stage, groups], index) => (
              <details key={stage} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm open:shadow-lg dark:border-gray-700 dark:bg-gray-900">
                <summary className="cursor-pointer list-none pr-8 text-xl font-bold text-gray-900 marker:hidden dark:text-white">
                  <span className="mr-3 text-primary">{String(index + 1).padStart(2, "0")}</span>{stage.replace(/^Study \d+ — /, "")}
                  <span aria-hidden="true" className="float-right text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <ul className="mt-5 space-y-3 border-t border-gray-200 pt-5 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                  {groups.map((group) => <li key={group} className="leading-7">• {group}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-wider text-purple-300">Modern agentic development</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">AI-era thinking, agents, and production systems</h2>
            <p className="mt-4 leading-7 text-slate-300">A complementary track for learners who want to move beyond isolated models and understand how modern AI-assisted work, agent workflows, evaluation, and deployment fit together.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiEraLearningTrack.map(([title, topics]) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
                <h3 className="text-xl font-bold">{title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">{topics.map((topic) => <li key={topic}>• {topic}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-400">Coverage is tailored to the learner and project. Enterprise architecture, regulated-domain, and cloud-production subjects are taught as concepts and guided practice unless a specific hands-on environment is agreed.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Who can join?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {tutoringAudience.map((item) => <p key={item} className="flex gap-3 rounded-xl bg-gray-50 p-5 text-gray-700 dark:bg-gray-800 dark:text-gray-300"><CheckCircle2 className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />{item}</p>)}
          </div>
          <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">Academic support is explanation-led: I help learners understand, debug, and improve their own work. I do not complete assessed work on a learner&apos;s behalf.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What you can learn</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tutoringCurriculum.map(([category, topics]) => <article key={category} className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900"><h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3><ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">{topics.map((topic) => <li key={topic}>• {topic}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How lessons work</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{lessonSteps.map(([title, description], index) => <article key={title} className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700"><span className="text-sm font-bold text-primary">0{index + 1}</span><h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3><p className="mt-3 text-gray-600 dark:text-gray-300">{description}</p></article>)}</div>
          <h2 className="mt-16 text-3xl font-bold text-gray-900 dark:text-white">Lesson formats</h2>
          <div className="mt-6 flex flex-wrap gap-3">{lessonFormats.map((format) => <span key={format} className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">{format}</span>)}</div>
          <h2 className="mt-16 text-3xl font-bold text-gray-900 dark:text-white">Session options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">{tutoringSessionOptions.map(([title, description]) => <article key={title} className="rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 p-7 dark:from-purple-950/30 dark:to-blue-950/30"><h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3><p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{description}</p><a href="#tutoring-enquiry" className="mt-5 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white">Request a Tutoring Session</a></article>)}</div>
          <div className="mt-14 rounded-2xl border border-gray-200 p-7 dark:border-gray-700"><h2 className="text-2xl font-bold text-gray-900 dark:text-white">A practical teaching approach</h2><p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">I currently provide personalised technical guidance to learners through live explanations, coding demonstrations, project walkthroughs, debugging, and structured practice. My approach is based on breaking difficult concepts into smaller steps and helping learners apply them through real code.</p><p className="mt-3 text-gray-600 dark:text-gray-300">I have experience guiding individual learners through Python, data science, machine learning, and AI application projects.</p></div>
        </div>
      </section>
      <section id="tutoring-enquiry" className="scroll-mt-24 bg-gray-50 py-20 dark:bg-gray-800"><div className="mx-auto max-w-4xl px-4 sm:px-6"><ServiceEnquiryForm initialService="AI Tutoring" /></div></section>
    </main>
  );
}
