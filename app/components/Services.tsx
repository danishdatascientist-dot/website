"use client";

import React, { FormEvent, useState } from "react";
import { ArrowRight, Bot, GraduationCap, Send, ShoppingCart } from "lucide-react";
import { contactDetails } from "@/data/contact";

const Services: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submitEcommerceEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`E-Commerce consulting enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `${contactDetails.mailto}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.3),transparent_42%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-flex rounded-full border border-purple-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-purple-100 mb-4">
            Work with me
          </span>
          <h2 className="text-4xl font-bold mb-4">Practical Support for AI & E-Commerce</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Focused sessions and project guidance shaped around your goals, experience, and real-world constraints
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-8 shadow-2xl card-tilt animate-slide-up">
            <GraduationCap className="w-11 h-11 text-purple-300 mb-6" />
            <h3 className="text-2xl font-bold mb-3">AI Tutoring</h3>
            <p className="text-slate-300 leading-relaxed mb-8">
              Hands-on, project-based lessons in Python, automation, and agentic AI for beginners and working professionals.
            </p>
            <a href={`${contactDetails.mailto}?subject=AI%20Tutoring%20Enquiry`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold hover:bg-primary/90 transition-colors">
              Get in Touch <ArrowRight size={18} />
            </a>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-8 shadow-2xl card-tilt animate-slide-up">
            <Bot className="w-11 h-11 text-blue-300 mb-6" />
            <h3 className="text-2xl font-bold mb-3">1:1 Consultation</h3>
            <p className="text-slate-300 leading-relaxed mb-5">
              A focused 30–60 minute paid session for businesses or individuals deciding where and how AI can improve their work.
            </p>
            <p className="text-sm text-slate-400 mb-5">Calendly booking link coming soon.</p>
            <a href={`${contactDetails.mailto}?subject=1%3A1%20AI%20Consultation`} className="inline-flex items-center gap-2 rounded-lg border border-purple-300/50 px-5 py-3 font-semibold hover:bg-white/10 transition-colors">
              Request a Session <ArrowRight size={18} />
            </a>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-8 shadow-2xl animate-slide-up">
            <ShoppingCart className="w-11 h-11 text-cyan-300 mb-6" />
            <h3 className="text-2xl font-bold mb-3">E-Commerce Consulting</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Product research and market analysis support for Amazon and e-commerce sellers.
            </p>
            <form onSubmit={submitEcommerceEnquiry} className="space-y-4">
              <input
                required
                aria-label="Name"
                placeholder="Name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="w-full rounded-lg border border-white/15 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-primary focus:outline-none"
              />
              <input
                required
                type="email"
                aria-label="Email"
                placeholder="Email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-lg border border-white/15 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-primary focus:outline-none"
              />
              <textarea
                required
                rows={4}
                aria-label="Message"
                placeholder="How can I help?"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="w-full resize-none rounded-lg border border-white/15 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-400 focus:border-primary focus:outline-none"
              />
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold hover:bg-primary/90 transition-colors">
                Send Enquiry <Send size={17} />
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
