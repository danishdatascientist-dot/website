import React from "react";
import Link from "next/link";
import { BarChart3, Bot, BrainCircuit, ExternalLink, Github, MapPin, Search } from "lucide-react";
import { projects } from "@/data/projects";

const categoryStyles = {
  analytics: { gradient: "from-blue-600 to-cyan-500", icon: <BarChart3 className="h-7 w-7" /> },
  "machine-learning": { gradient: "from-purple-600 to-pink-500", icon: <BrainCircuit className="h-7 w-7" /> },
  "agentic-ai": { gradient: "from-indigo-600 to-purple-600", icon: <MapPin className="h-7 w-7" /> },
  rag: { gradient: "from-emerald-600 to-teal-500", icon: <Search className="h-7 w-7" /> },
};

const Projects: React.FC = () => (
  <section className="bg-gray-50 py-20 dark:bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h1>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
          Applied analytics, machine learning, RAG, and agentic AI projects focused on practical business and user problems
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, index) => {
          const style = categoryStyles[project.category];
          return (
            <article
              id={project.slug}
              key={project.slug}
              className="card-tilt scroll-mt-24 overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-900"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className={`bg-gradient-to-r ${style.gradient} p-6 text-white`}>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/20 p-3">{style.icon}</div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
              </div>
              <div className="p-7">
                <div className="mb-6">
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Problem</h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">{project.problem}</p>
                </div>
                <div className="mb-6 rounded-xl bg-primary/5 p-4">
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Main result</h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">{project.result}</p>
                </div>
                <div className="mb-6">
                  <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Project work</h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-white">
                    <Bot size={16} /> View Details
                  </Link>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 font-semibold text-primary">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-300">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
