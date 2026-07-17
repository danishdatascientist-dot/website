import Link from "next/link";
import React from "react";
import { ArrowRight, BarChart3, Boxes, PackageSearch, Search, Store } from "lucide-react";
import { ecommerceAreas, marketplaceTools } from "@/data/ecommerceExpertise";

const toolIcons = [Store, BarChart3, Search];

const EcommerceExpertise: React.FC = () => (
  <section id="ecommerce-expertise" className="scroll-mt-24 bg-gray-50 py-20 dark:bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="mx-auto mb-14 max-w-4xl text-center">
        <p className="font-semibold uppercase tracking-[0.16em] text-primary">Domain expertise for better data solutions</p>
        <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">E-Commerce Expertise</h2>
        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Hands-on Amazon marketplace knowledge that complements my AI, data science, and analytics work with practical commercial context across product research, pricing, inventory, suppliers, listings, and performance reporting.
        </p>
        <p className="mt-3 text-gray-600 dark:text-gray-300">This experience helps me understand the business questions behind the data and build more relevant dashboards, reporting workflows, automation tools, and AI-assisted solutions.</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {ecommerceAreas.map((area, index) => {
          const Icon = index === 0 ? PackageSearch : Boxes;
          return (
            <article key={area.title} className="card-tilt rounded-2xl border border-gray-200 bg-white p-7 shadow-lg dark:border-gray-700 dark:bg-gray-900 sm:p-8">
              <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">{area.title}</h3>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">{area.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.skills.slice(0, 8).map((skill) => <span key={skill} className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">{skill}</span>)}
              </div>
              <details className="group mt-6 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                <summary className="cursor-pointer font-semibold text-primary">Learn more <span aria-hidden="true" className="ml-1 inline-block transition-transform group-open:rotate-90">→</span></summary>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{area.details}</p>
              </details>
            </article>
          );
        })}
      </div>

      <div className="mt-14">
        <h3 className="text-center text-3xl font-bold text-gray-900 dark:text-white">Marketplace Research Tools</h3>
        <p className="mx-auto mt-3 max-w-3xl text-center text-gray-600 dark:text-gray-300">Tools used to investigate product opportunities, keywords, competition, pricing history, sales patterns, and inventory risks.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {marketplaceTools.map((tool, index) => {
            const Icon = toolIcons[index];
            return <article key={tool.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"><Icon className="h-8 w-8 text-primary" aria-hidden="true" /><h4 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{tool.name}</h4><p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{tool.description}</p></article>;
          })}
        </div>
      </div>

      <aside className="mt-12 grid items-center gap-6 rounded-2xl bg-gradient-to-r from-purple-950 to-blue-950 p-7 text-white md:grid-cols-[auto,1fr] sm:p-8">
        <div className="text-center md:text-left"><strong className="block text-3xl font-bold text-purple-200">200+ SKUs analysed</strong><span className="mt-2 block text-sm text-slate-300">Amazon marketplace reporting · Inventory and restock analysis · Pricing and competitor review</span></div>
        <p className="leading-7 text-slate-300">Sales, pricing, inventory, keyword, and competitor data reviewed across a UK-based Amazon marketplace operation.</p>
      </aside>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Link href="/ecommerce-expertise" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90">Explore E-Commerce Expertise <ArrowRight size={18} aria-hidden="true" /></Link>
        <Link href="/services/ecommerce-consulting" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10">View E-Commerce Consulting <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
      <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">Independent marketplace experience and training; not affiliated with or endorsed by Amazon or the listed software providers.</p>
    </div>
  </section>
);

export default EcommerceExpertise;
