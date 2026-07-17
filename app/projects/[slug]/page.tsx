import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return project ? { title: `${project.title} | Danish Shahzad`, description: project.problem } : {};
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="bg-white py-20 dark:bg-gray-900">
      <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-primary">
          <ArrowLeft size={18} aria-hidden="true" /> Back to Projects
        </Link>
        <p className="mt-10 font-semibold uppercase tracking-wider text-primary">{project.category.replace("-", " ")}</p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">{project.title}</h1>
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 p-7 dark:bg-gray-800"><h2 className="text-xl font-bold text-gray-900 dark:text-white">Problem</h2><p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{project.problem}</p></div>
          <div className="rounded-2xl bg-primary/5 p-7"><h2 className="text-xl font-bold text-gray-900 dark:text-white">Main result</h2><p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{project.result}</p></div>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project work</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="rounded-xl border border-gray-200 p-4 text-gray-600 dark:border-gray-700 dark:text-gray-300">{feature}</li>)}</ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technologies</h2>
          <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{technology}</span>)}</div>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white"><ExternalLink size={18} /> Live Demo</a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 font-semibold text-primary"><Github size={18} /> GitHub</a>}
        </div>
      </article>
    </main>
  );
}
