import React from "react";
import { BarChart3, Boxes, PackageSearch, Store } from "lucide-react";

const tools = [
  { name: "Helium 10", description: "Amazon product, keyword, listing, and market research toolkit." },
  { name: "Jungle Scout", description: "Product opportunity research and sales-demand estimation platform." },
  { name: "Keepa", description: "Historical Amazon pricing, rank, offer, and stock-trend tracker." },
];

const EcommerceExpertise: React.FC = () => (
  <section id="ecommerce" className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-slide-up">
        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold mb-4">
          Domain expertise for better data solutions
        </span>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          E-Commerce Expertise
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Hands-on Amazon marketplace knowledge that complements my AI and data science work with practical commercial context
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <article className="rounded-2xl p-8 bg-gray-50 dark:bg-gray-800 shadow-lg card-tilt animate-slide-up">
          <PackageSearch className="w-10 h-10 text-primary mb-5" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Private Label</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            Private Label means developing and selling a branded product sourced from a manufacturer. My work covered product and niche research, supplier sourcing, competitor analysis, pricing assessment, and coordinating branding requirements.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Product research", "Supplier sourcing", "Brand positioning", "Market analysis"].map((item) => (
              <span key={item} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{item}</span>
            ))}
          </div>
        </article>

        <article className="rounded-2xl p-8 bg-gray-50 dark:bg-gray-800 shadow-lg card-tilt animate-slide-up">
          <Boxes className="w-10 h-10 text-secondary mb-5" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Wholesale</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            Wholesale involves purchasing established branded products from authorized suppliers and reselling them. My work included supplier communication and negotiation, offer and margin analysis, inventory tracking, replenishment planning, and performance reporting.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Supplier negotiation", "Margin analysis", "Inventory management", "Reporting"].map((item) => (
              <span key={item} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">{item}</span>
            ))}
          </div>
        </article>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div key={tool.name} className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center gap-3 mb-3">
              {index === 0 ? <Store className="text-primary" /> : index === 1 ? <BarChart3 className="text-primary" /> : <PackageSearch className="text-primary" />}
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{tool.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EcommerceExpertise;
