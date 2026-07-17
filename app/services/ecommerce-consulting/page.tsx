import type { Metadata } from "next";
import ServiceEnquiryForm from "@/app/components/forms/ServiceEnquiryForm";
import { ecommerceServiceGroups, ecommerceTools } from "@/data/services";
import { ecommerceAreas, ecommerceDataConnections, marketplaceTools } from "@/data/ecommerceExpertise";

export const metadata: Metadata = {
  title: "Amazon & E-Commerce Consulting | Danish Shahzad",
  description: "Amazon and e-commerce support covering product research, competitor analysis, pricing, listings, inventory analytics, private label, and FBA wholesale.",
  openGraph: { title: "Amazon & E-Commerce Consulting | Danish Shahzad", description: "Structured Amazon and e-commerce analysis for clearer marketplace decisions.", type: "website" },
};

export default function EcommerceConsultingPage() {
  return <main className="bg-white dark:bg-gray-900">
    <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="font-semibold uppercase tracking-[0.2em] text-purple-300">Domain knowledge with data</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Amazon &amp; E-Commerce Consulting</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Practical product research, market analysis, sales reporting, pricing review, and inventory-planning support for Amazon and e-commerce sellers.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Private Label and Wholesale experience</h2>
        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {ecommerceAreas.map((area) => <article key={area.title} className="rounded-2xl border border-gray-200 p-7 shadow-lg dark:border-gray-700"><h3 className="text-2xl font-bold text-gray-900 dark:text-white">{area.title}</h3><p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">{area.description}</p><p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">{area.details}</p><div className="mt-5 flex flex-wrap gap-2">{area.skills.map((skill) => <span key={skill} className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">{skill}</span>)}</div></article>)}
        </div>

        <h2 className="mt-16 text-3xl font-bold text-gray-900 dark:text-white">Areas of support</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{ecommerceServiceGroups.map(([title, items]) => <article key={title} className="rounded-2xl border border-gray-200 p-7 shadow-lg dark:border-gray-700"><h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3><ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">{items.map((item) => <li key={item}>• {item}</li>)}</ul></article>)}</div>

        <h2 className="mt-16 text-3xl font-bold text-gray-900 dark:text-white">Marketplace Research Tools</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{marketplaceTools.map((tool) => <article key={tool.name} className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800"><h3 className="text-xl font-bold text-gray-900 dark:text-white">{tool.name}</h3><p className="mt-3 text-gray-600 dark:text-gray-300">{tool.description}</p><ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">{tool.uses.map((use) => <li key={use}>• {use}</li>)}</ul></article>)}</div>

        <h2 className="mt-16 text-3xl font-bold text-gray-900 dark:text-white">How This Supports My Data Work</h2>
        <p className="mt-4 max-w-4xl leading-7 text-gray-600 dark:text-gray-300">E-commerce experience gives my technical work stronger business context. Instead of analysing data only as an academic exercise, I can connect metrics to commercial questions such as what to restock, where margins are weak, which products are slowing down, how pricing is changing, and where reporting can be automated.</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{ecommerceDataConnections.map((item) => <p key={item} className="rounded-xl bg-primary/10 p-4 font-medium text-gray-800 dark:text-gray-200">• {item}</p>)}</div>

        <h2 className="mt-16 text-3xl font-bold text-gray-900 dark:text-white">Tools and methods</h2>
        <div className="mt-6 flex flex-wrap gap-3">{ecommerceTools.map((tool) => <span key={tool} className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">{tool}</span>)}</div>
        <p className="mt-8 max-w-4xl leading-7 text-gray-600 dark:text-gray-300">This service complements my AI and data-science work: the domain context helps turn marketplace data into relevant analysis. Recommendations support decision-making but do not guarantee sales, ranking, profitability, or account outcomes.</p>
      </div>
    </section>
    <section className="bg-gray-50 py-20 dark:bg-gray-800"><div className="mx-auto max-w-4xl px-4 sm:px-6"><ServiceEnquiryForm initialService="E-Commerce Consulting" /></div></section>
  </main>;
}
