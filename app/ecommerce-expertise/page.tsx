import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ecommerceAreas, ecommerceDataConnections, marketplaceTools } from "@/data/ecommerceExpertise";

export const metadata: Metadata = {
  title: "E-Commerce Expertise | Danish Shahzad",
  description: "Amazon marketplace analysis experience across private label, wholesale, product research, pricing, inventory, suppliers, and SKU reporting.",
};

export default function EcommerceExpertisePage() {
  return <main className="bg-white dark:bg-gray-900">
    <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 py-24 text-white"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6"><p className="font-semibold uppercase tracking-[0.2em] text-purple-300">Domain expertise for better data solutions</p><h1 className="mt-4 text-4xl font-bold md:text-6xl">E-Commerce Expertise</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Hands-on Amazon marketplace knowledge that complements my AI, data science, and analytics work with practical commercial context across product research, pricing, inventory, suppliers, listings, and performance reporting.</p></div></section>
    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-7 lg:grid-cols-2">{ecommerceAreas.map((area) => <article key={area.title} className="rounded-2xl border border-gray-200 p-7 shadow-lg dark:border-gray-700"><h2 className="text-2xl font-bold text-gray-900 dark:text-white">{area.title}</h2><p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">{area.description}</p><p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">{area.details}</p><div className="mt-5 flex flex-wrap gap-2">{area.skills.map((skill) => <span key={skill} className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">{skill}</span>)}</div></article>)}</div>
    <h2 className="mt-16 text-3xl font-bold text-gray-900 dark:text-white">Marketplace Research Tools</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{marketplaceTools.map((tool) => <article key={tool.name} className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800"><h3 className="text-xl font-bold text-gray-900 dark:text-white">{tool.name}</h3><p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{tool.description}</p><ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">{tool.uses.map((use) => <li key={use}>• {use}</li>)}</ul></article>)}</div>
    <h2 className="mt-16 text-3xl font-bold text-gray-900 dark:text-white">How This Supports My Data Work</h2><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{ecommerceDataConnections.map((item) => <p key={item} className="rounded-xl bg-primary/10 p-4 font-medium text-gray-800 dark:text-gray-200">• {item}</p>)}</div>
    <div className="mt-12 flex flex-col gap-4 sm:flex-row"><Link href="/services/ecommerce-consulting" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white">View E-Commerce Consulting <ArrowRight size={18} /></Link><Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary">View Analytics Projects <ArrowRight size={18} /></Link></div><p className="mt-8 text-sm text-gray-500">Independent marketplace experience and training; not affiliated with or endorsed by Amazon or the listed software providers.</p></div></section>
  </main>;
}
