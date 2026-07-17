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
    title: "E-Commerce Data Analyst (UK Market)",
    company: "Amazon Marketplace Operations · Contract",
    period: "May 2021 – Dec 2023 · 2 yrs 8 mos",
    location: "Remote",
    achievements: [
      "Analysed sales, pricing, inventory, keyword, and competitor information across more than 200 SKUs in a UK Amazon marketplace operation.",
      "Tracked inventory movement, stock levels, and restock priorities using structured spreadsheets and dashboard-ready datasets.",
      "Prepared recurring KPI reports covering product performance, pricing gaps, slow-moving stock, and listing observations.",
      "Reviewed competitor prices and marketplace trends to support product, pricing, and inventory decisions.",
      "Cleaned and organised operational data for consistent reporting and further analysis.",
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
