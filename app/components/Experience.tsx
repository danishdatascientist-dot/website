import React from "react";
import { Award, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Agentic AI & Data Science Consultant",
    company: "Danish Agentic Solutions",
    period: "Dec 2018 – Sep 2024",
    location: "Remote",
    achievements: [
      "Developed AI, machine-learning, data-analysis, and application projects across practical use cases.",
      "Prepared, cleaned, and analyzed structured datasets for exploratory analysis, predictive modelling, regression, and classification use cases.",
      "Built document Q&A and Retrieval-Augmented Generation (RAG) systems that ground responses in retrieved source material.",
      "Developed AI-engineering workflows with the OpenAI SDK, LangChain, and LangGraph, including tool-using agents and stateful application flows.",
      "Created FastAPI and Streamlit applications that turn analytical models and AI workflows into accessible user-facing tools.",
      "Worked with vector retrieval, FAISS, and Model Context Protocol (MCP) concepts for connected, context-aware AI applications.",
    ],
    technologies: ["Python", "OpenAI SDK", "LangChain", "LangGraph", "FastAPI", "Streamlit", "FAISS", "TensorFlow"],
    focusAreas: [
      "Data cleaning and exploratory analysis",
      "Regression and classification",
      "AI engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Document Q&A systems",
      "Retrieval-grounded assistants",
      "OpenAI SDK integrations",
      "LangChain workflows",
      "LangGraph agent workflows",
      "Model Context Protocol (MCP)",
    ],
  },
  {
    title: "E-Commerce Sales Specialist (UK Market)",
    company: "Ecommerce – Amazon · Contract",
    period: "May 2021 – Dec 2023 · 2 yrs 8 mos",
    location: "Remote",
    achievements: [
      "Analyzed sales performance data, pricing trends, and inventory movement to support revenue planning and operational decisions for Amazon seller accounts.",
      "Used Python and data analysis techniques to identify underperforming listings, pricing gaps, and restock opportunities, directly influencing profitability decisions.",
      "Built structured analytical reports translating historical sales trends into actionable recommendations for product visibility and inventory management.",
      "Monitored competitor pricing and market dynamics to support data-driven positioning strategies across product categories.",
      "Collaborated with sales and operations teams to align analytical findings with business goals and quarterly planning cycles.",
    ],
    technologies: ["Python", "Data Analytics", "Amazon Seller Central", "Market Research"],
    focusAreas: [
      "Sales performance analysis",
      "KPI reporting",
      "Competitor pricing",
      "Product profitability",
      "Inventory planning",
      "Restock analysis",
    ],
  },
  {
    title: "Amazon Private Label Specialist",
    company: "Extreme Commerce",
    period: "Jul 2022 – Feb 2023 · 8 mos",
    location: "On-site",
    achievements: [
      "Conducted product research and niche analysis using Helium 10, Jungle Scout, and Keepa to identify profitable private-label opportunities.",
      "Performed demand validation, margin estimation, and supplier assessment to support product-launch decisions.",
      "Optimized Amazon listings through keyword strategy, SEO, and conversion-focused copy to improve organic visibility and click-through rates.",
      "Used KPIs and sales-performance metrics to guide pricing strategy, inventory planning, and product-positioning decisions.",
      "Managed supplier coordination, inventory planning, and PPC campaign setup to support smooth product launches.",
      "Monitored post-launch performance and recommended changes to listings, pricing, and advertising spend based on data.",
    ],
    technologies: ["Helium 10", "Jungle Scout", "Keepa", "Amazon Seller Central", "PPC"],
    focusAreas: [
      "Product research",
      "Niche analysis",
      "Helium 10",
      "Jungle Scout",
      "Keepa",
      "Listing optimization",
      "Keyword research",
      "Supplier assessment",
      "Margin estimation",
      "PPC fundamentals",
    ],
  },
  {
    title: "Amazon FBA & Wholesale Operations",
    company: "Extreme Commerce",
    period: "Jan 2022 – Mar 2022 · 3 mos",
    location: "Karachi, Pakistan · On-site",
    achievements: [
      "Analyzed sales and inventory data to identify pricing opportunities and support stock-planning decisions for Amazon wholesale accounts.",
      "Prepared structured analytical reports for sales tracking, competitor-price monitoring, and inventory optimization across multiple product categories.",
      "Evaluated wholesale supplier accounts and product-performance data to prioritize high-margin SKUs and flag underperforming inventory.",
      "Supported the operations team with data-driven insights to improve order accuracy, restocking timing, and overall account profitability.",
    ],
    technologies: ["Data Analytics", "Amazon FBA", "Inventory Management"],
    focusAreas: [
      "Wholesale account analysis",
      "Supplier evaluation",
      "Product profitability",
      "Inventory planning",
      "Amazon FBA operations",
    ],
  },
];

const Experience: React.FC = () => (
  <section className="bg-white py-20 dark:bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center"><h1 className="text-4xl font-bold text-gray-900 dark:text-white">Work Experience</h1><p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">Professional work across agentic AI, data science, Amazon operations, and analytics.</p></div>
      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <article key={experience.title} className="animate-slide-up rounded-2xl bg-gray-50 p-8 shadow-lg dark:bg-gray-800" style={{ animationDelay: `${index * 0.1}s` }}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.title}</h2>
            <div className="my-4 flex flex-wrap gap-5">
              <span className="flex items-center font-semibold text-primary"><Award className="mr-2 h-5 w-5" />{experience.company}</span>
              <span className="flex items-center text-gray-600 dark:text-gray-300"><Calendar className="mr-2 h-5 w-5" />{experience.period}</span>
              <span className="flex items-center text-gray-600 dark:text-gray-300"><MapPin className="mr-2 h-5 w-5" />{experience.location}</span>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <ul className="space-y-3 lg:col-span-2">{experience.achievements.map((item) => <li key={item} className="flex items-start text-gray-600 dark:text-gray-300"><span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />{item}</li>)}</ul>
              <div><h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Technologies</h3><div className="flex flex-wrap gap-2">{experience.technologies.map((technology) => <span key={technology} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{technology}</span>)}</div></div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {experience.focusAreas.map((area) => (
                  <span key={area} className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-sm font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-300">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;
