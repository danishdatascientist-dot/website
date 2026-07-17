import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Briefcase, Code, FileText, FolderKanban, GraduationCap, Mail } from "lucide-react";
import Blog from "./Blog";
import Certificates from "./Certificates";
import { projects } from "@/data/projects";
import { homepageEducationItems } from "@/data/education";
import { services } from "@/data/services";
import ServiceCard from "./services/ServiceCard";
import EcommerceExpertise from "./EcommerceExpertise";

const PreviewHeading = ({ href, title, description }: { href: string; title: string; description: string }) => (
  <div className="mb-10 text-center">
    <Link href={href} className="group inline-flex items-center gap-3">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{title}</h2>
      <ArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
    </Link>
    <p className="mx-auto mt-3 max-w-3xl text-lg text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Cta = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg hover:bg-primary/90">
    {children}<ArrowRight size={18} />
  </Link>
);

const HomePreviews: React.FC = () => (
  <>
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl"><Image src="/about_pic.jpg" alt="Danish Shahzad, Agentic AI Engineer and Data Scientist" fill className="object-cover" /></div>
        <div>
          <Link href="/about"><h2 className="mb-5 text-4xl font-bold text-gray-900 hover:text-primary dark:text-white">About Me</h2></Link>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">I am a data science and AI practitioner with a background in automotive engineering, artificial intelligence, Amazon marketplace operations, and practical software development.</p>
          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">I focus on understandable, useful, and evidence-based solutions across predictive modelling, business analytics, RAG systems, chatbots, automation, and inventory analysis.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">{[["Analytical Background","Engineering and data-focused training."],["Practical AI","Machine learning, RAG, chatbots, and workflows."],["Business Context","Pricing, inventory, product, and reporting decisions."],["Teaching & Guidance","Personalised technical and project guidance."]].map(([title,text]) => <div key={title} className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-900"><h3 className="font-bold text-gray-900 dark:text-white">{title}</h3><p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{text}</p></div>)}</div>
          <Cta href="/about">Read More About Me</Cta>
        </div>
      </div>
    </section>

    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <PreviewHeading href="/experience" title="Experience" description="AI, data science, analytics, and Amazon marketplace experience." />
        <div className="grid gap-6 text-left md:grid-cols-2">
          {[
            ["Agentic AI & Data Science Consultant", "Danish Agentic Solutions", "DEC 2018 – SEP 2024"],
            ["E-Commerce Sales Specialist (UK Market)", "Ecommerce – Amazon · Contract", "May 2021 – Dec 2023"],
          ].map(([title, company, date]) => <Link key={title} href="/experience" className="card-tilt rounded-2xl bg-gray-50 p-7 shadow-lg dark:bg-gray-800"><Briefcase className="mb-4 text-primary" /><h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3><p className="mt-2 font-semibold text-primary">{company}</p><p className="mt-2 text-gray-500">{date}</p></Link>)}
        </div>
        <Cta href="/experience">View Full Experience</Cta>
      </div>
    </section>

    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <PreviewHeading href="/projects" title="Featured Projects" description="Selected AI agents, RAG applications, and analytics projects." />
        <div className="grid gap-6 text-left md:grid-cols-2 lg:grid-cols-5">
          {projects.slice(0, 5).map((project) => (
            <Link key={project.slug} href={`/projects#${project.slug}`} className="card-tilt rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-900">
              <FolderKanban className="mb-4 text-primary" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 line-clamp-4 text-sm text-gray-600 dark:text-gray-300">{project.problem}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">View Details</span>
            </Link>
          ))}
        </div>
        <Cta href="/projects">View All Projects</Cta>
      </div>
    </section>

    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <PreviewHeading href="/skills" title="Technical Skills" description="Tools and technologies used across data analysis, machine learning, generative AI, application development, and e-commerce analytics." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[["Programming & Data",["Python","Pandas","NumPy","SQL","Data Cleaning"]],["Machine Learning",["scikit-learn","Regression","Classification","Clustering","Evaluation"]],["Deep Learning",["TensorFlow","Keras","Neural Networks","CNN","Training"]],["Generative AI",["LLMs","Prompt Engineering","RAG","Embeddings","Chatbots"]],["AI Frameworks",["LangChain","LangGraph","FAISS","Pinecone","MCP"]],["Analytics & E-Commerce",["Power BI","Excel","Helium 10","Keepa","Inventory Analysis"]]].map(([title, skills]) => <Link key={title as string} href="/skills" className="rounded-2xl bg-gray-50 p-7 shadow-lg dark:bg-gray-800"><Code className="mx-auto mb-4 text-primary" /><h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{title as string}</h3><div className="flex flex-wrap justify-center gap-2">{(skills as string[]).map(skill => <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">{skill}</span>)}</div></Link>)}
        </div>
        <Cta href="/skills">Explore All Skills</Cta>
      </div>
    </section>

    <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/services" className="group inline-flex items-center gap-3">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Tutoring &amp; Consulting Services</h2>
            <ArrowRight className="text-purple-300 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-300">Personalised technical learning and practical guidance for AI, data science, and e-commerce challenges.</p>
        </div>
        <div className="grid gap-6 text-left lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
        <Cta href="/services">View All Services</Cta>
      </div>
    </section>

    <EcommerceExpertise />

    <Certificates preview />

    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <PreviewHeading href="/education" title="Education & Professional Development" description="Formal education and professional training across engineering, artificial intelligence, generative AI, data science, and e-commerce." />
        <div className="grid gap-6 text-left lg:grid-cols-3">
          {homepageEducationItems.map((item) => (
            <Link key={item.title} href="/education" className="card-tilt block rounded-2xl bg-gray-50 p-7 shadow-lg dark:bg-gray-800">
              <GraduationCap className="mb-4 text-primary" size={32} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 font-semibold text-primary">{item.institution}</p>
              <p className="mt-2 text-sm text-gray-500">{item.startDate} – {item.endDate}</p>
              <p className="mt-4 line-clamp-4 text-gray-600 dark:text-gray-300">{item.description}</p>
            </Link>
          ))}
        </div>
        <Cta href="/education">View Education &amp; Training</Cta>
      </div>
    </section>

    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <PreviewHeading href="/resume" title="Resume" description="View or download my verified professional resume covering agentic AI, data science, machine learning, analytics, projects, education, and e-commerce expertise." />
        <article className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-left shadow-lg dark:bg-gray-900">
          <FileText className="h-10 w-10 text-primary" aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">Danish Shahzad — Professional Resume</h3>
          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">One verified resume presenting my Agentic AI Engineer and Data Scientist positioning, relevant experience, projects, skills, education, and e-commerce background.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/resume" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white">View Resume</Link>
            <a href="/cv_datascientist.pdf" download="Danish_Shahzad_CV.pdf" className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary">Download PDF</a>
          </div>
        </article>
      </div>
    </section>

    <Blog />

    <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center"><Mail className="mx-auto mb-5" size={44} /><h2 className="text-4xl font-bold">Have a project or opportunity in mind?</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">Let’s discuss practical AI, data science, analytics, or development work.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-semibold text-primary">Contact Me <ArrowRight size={18} /></Link></div>
    </section>
  </>
);

export default HomePreviews;
