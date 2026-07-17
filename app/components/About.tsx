import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  FileText,
  Github,
  MapPin,
} from "lucide-react";
import { contactDetails } from "@/data/contact";

const capabilities = [
  {
    title: "Data Preparation & Analysis",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: [
      "Data cleaning and transformation",
      "Exploratory data analysis",
      "KPI reporting",
      "Feature engineering",
    ],
  },
  {
    title: "Machine Learning",
    icon: <BrainCircuit className="h-6 w-6" />,
    skills: [
      "Regression and classification",
      "Feature-driven predictive modelling",
      "Model evaluation",
      "Applied business analysis",
    ],
  },
  {
    title: "Business & E-Commerce Analytics",
    icon: <BriefcaseBusiness className="h-6 w-6" />,
    skills: [
      "Inventory and e-commerce analysis",
      "Sales and pricing analysis",
      "Product-performance reporting",
      "Data-informed recommendations",
    ],
  },
  {
    title: "AI Application Development",
    icon: <Bot className="h-6 w-6" />,
    skills: [
      "FastAPI and Streamlit applications",
      "Document Q&A systems",
      "Retrieval-grounded AI assistants",
      "LangChain and LangGraph workflows",
    ],
  },
];

const About: React.FC = () => (
  <section className="bg-white py-20 dark:bg-gray-900">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="animate-slide-up">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/about_pic.jpg"
              alt="Danish Shahzad, Agentic AI Engineer and Data Scientist"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="flex items-center gap-2 font-semibold">
                <MapPin className="h-5 w-5 text-purple-300" />
                Karachi, Pakistan
              </p>
              <p className="mt-2 text-sm text-gray-200">
                Open to suitable remote opportunities worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="animate-slide-up">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            About Me
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
            Turning data and AI into practical applications
          </h1>
          <div className="mt-7 space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            <p>
              I am an Agentic AI Engineer and Data Scientist focused on
              building useful, evidence-grounded solutions for real business
              problems. My work spans the full path from preparing and
              understanding data to developing machine-learning models and
              user-facing AI applications.
            </p>
            <p>
              I work with data cleaning, transformation, exploratory analysis,
              KPI reporting, and feature engineering to create dependable
              foundations for analysis. I apply regression and classification
              techniques where predictive modelling is appropriate, and I use
              my e-commerce background to support inventory, sales, pricing,
              and product-performance analysis.
            </p>
            <p>
              On the application side, I build FastAPI and Streamlit solutions,
              document Q&amp;A systems, retrieval-grounded AI assistants, and
              agent workflows using LangChain and LangGraph. I aim to keep
              these systems practical, understandable, and connected to the
              data or source material they rely on.
            </p>
            <p>
              I am based in Karachi, Pakistan, and open to suitable remote
              opportunities with teams and clients worldwide.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white shadow-lg hover:bg-primary/90"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-5 py-3 font-semibold text-primary hover:bg-primary hover:text-white"
            >
              <FileText size={18} /> Resume
            </Link>
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200"
            >
              <Github size={18} /> GitHub
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            What I Work On
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
            A balanced combination of analytics, machine learning, business
            context, and AI application development.
          </p>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="card-tilt rounded-2xl bg-gray-50 p-7 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {capability.title}
                </h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {capability.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
