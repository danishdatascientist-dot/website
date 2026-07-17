import React from "react";
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  ShoppingCart,
} from "lucide-react";

const skillCategories = [
  {
    title: "Data & Analytics",
    description: "Preparing, exploring, and translating data into usable business reporting.",
    icon: <Database className="h-6 w-6" />,
    skills: [
      "Python", "SQL", "Pandas", "NumPy", "Excel",
      "Exploratory Data Analysis", "Data Cleaning", "Data Transformation",
      "Joins", "Filtering", "Aggregations", "KPI Reporting",
      "Business Reporting", "ABC Analysis", "Pareto Analysis",
      "Inventory Analytics", "Pricing Analysis",
    ],
  },
  {
    title: "Machine Learning",
    description: "Building and evaluating models for predictive and analytical use cases.",
    icon: <BrainCircuit className="h-6 w-6" />,
    skills: [
      "scikit-learn", "TensorFlow", "Keras", "Regression",
      "Classification", "Clustering", "Forecasting", "Feature Engineering",
      "Model Evaluation", "Cross-Validation", "GridSearchCV",
      "MAE", "RMSE", "Precision", "Recall", "F1-score",
    ],
  },
  {
    title: "Visualization & Applications",
    description: "Presenting analysis clearly and turning models into accessible applications.",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: [
      "Power BI", "Streamlit", "Plotly", "Matplotlib", "Seaborn",
      "FastAPI", "REST APIs", "Jupyter Notebook",
    ],
  },
  {
    title: "Generative AI & Retrieval",
    description: "Creating source-grounded assistants and retrieval workflows over business and document data.",
    icon: <Bot className="h-6 w-6" />,
    skills: [
      "LangChain", "LangGraph", "Retrieval-Augmented Generation",
      "Prompt Engineering", "AI Agents", "OpenAI", "Google Gemini",
      "FAISS", "Pinecone", "Embeddings", "Semantic Search",
      "Document Q&A", "Retrieval Grounding",
    ],
  },
  {
    title: "AI Engineering",
    description: "Connecting models, retrieval, tools, APIs, and application interfaces into maintainable AI systems.",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      "OpenAI SDK", "Model Context Protocol (MCP)", "Tool Calling",
      "Agent Workflows", "Stateful LangGraph Flows", "Vector Retrieval",
      "Knowledge-Base Integration", "Structured Outputs",
      "API Integration", "FastAPI Backends", "Streamlit Interfaces",
      "RAG Evaluation", "Context Management",
    ],
  },
  {
    title: "E-Commerce & Amazon Analytics",
    description: "Applying marketplace context to product, pricing, inventory, and profitability decisions.",
    icon: <ShoppingCart className="h-6 w-6" />,
    skills: [
      "Amazon Seller Central", "Product Research", "Niche Analysis",
      "Helium 10", "Jungle Scout", "Keepa", "Keyword Research",
      "Listing Optimization", "Competitor Benchmarking", "Margin Estimation",
      "Supplier Assessment", "Inventory Planning", "Restock Planning",
      "Product Profitability", "Amazon FBA Operations", "PPC Fundamentals",
    ],
  },
  {
    title: "Development & Collaboration Tools",
    description: "Tools used to organize code, collaborate, and deliver project work.",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub", "Slack", "Zoom"],
  },
];

const focusAreas = [
  {
    title: "Analytics to Application",
    description: "Moving from raw data and KPIs to models, dashboards, APIs, and usable interfaces.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Retrieval-Grounded AI",
    description: "Building assistants that retrieve relevant source material before generating answers.",
    color: "from-purple-600 to-indigo-500",
  },
  {
    title: "AI for Business Workflows",
    description: "Combining AI engineering with e-commerce and operational context.",
    color: "from-emerald-600 to-teal-500",
  },
];

const Skills: React.FC = () => (
  <section className="bg-white py-20 dark:bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Skills & Expertise
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
          Practical capabilities across analytics, machine learning, AI
          engineering, application development, and Amazon e-commerce
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <article
            key={category.title}
            className="card-tilt animate-slide-up rounded-2xl bg-gray-50 p-7 shadow-lg dark:bg-gray-800"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h2>
            </div>
            <p className="mb-6 text-sm leading-6 text-gray-600 dark:text-gray-300">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
          How These Skills Work Together
        </h2>
        <div className="grid gap-7 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="overflow-hidden rounded-2xl bg-gray-50 shadow-lg dark:bg-gray-800"
            >
              <div className={`h-2 bg-gradient-to-r ${area.color}`} />
              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
