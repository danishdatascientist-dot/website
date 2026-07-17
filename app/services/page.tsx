import type { Metadata } from "next";
import ServiceCard from "@/app/components/services/ServiceCard";
import ServiceEnquiryForm from "@/app/components/forms/ServiceEnquiryForm";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Tutoring & Consulting | Danish Shahzad",
  description:
    "Explore one-to-one AI tutoring, data science guidance, AI consultation, and Amazon e-commerce consulting services by Danish Shahzad.",
  openGraph: {
    title: "AI Tutoring, Consultation & E-Commerce Services | Danish Shahzad",
    description:
      "Explore practical AI learning, technical consultation, and e-commerce analytics support.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-purple-300">Work with me</p>
            <h1 className="mt-4 text-4xl font-bold md:text-6xl">Tutoring &amp; Consulting Services</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Practical, personalised support in data science, artificial intelligence, AI application development, and e-commerce analytics.
            </p>
            <p className="mt-4 text-slate-300">Whether you want to learn technical skills, build a project, understand modern AI tools, or improve an e-commerce workflow, I provide focused one-to-one guidance based on your goals and current experience level.</p>
          </div>
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ServiceEnquiryForm />
        </div>
      </section>
    </main>
  );
}
