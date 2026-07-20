import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Award, Calendar, FileText } from "lucide-react";
import { getCertificates } from "@/lib/certificates";

const Certificates = ({ preview = false }: { preview?: boolean }) => {
  const allCertificates = getCertificates();
  const featuredTitles = [
    "Introduction to LangGraph",
    "Generative AI Application Developer Certificate",
    "Machine Learning",
    "Introduction to Programming Using Python",
  ];
  const certificates = preview
    ? featuredTitles
        .map((title) => allCertificates.find((certificate) => certificate.title === title))
        .filter((certificate): certificate is NonNullable<typeof certificate> => Boolean(certificate))
    : allCertificates;
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          {preview ? <Link href="/certificates"><h2 className="text-4xl font-bold text-gray-900 hover:text-primary dark:text-white">Professional Certificates</h2></Link> : <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Certificates Gallery</h1>}
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">{preview ? "A selection of professional learning in AI, data science, programming, and e-commerce." : `${certificates.length} certificate files from continued professional learning.`}</p>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((certificate) => (
            <article key={certificate.file} className="group card-tilt overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl dark:bg-gray-900">
              <div className="relative aspect-[4/3] border-b border-gray-200 bg-white dark:border-gray-700">
                {certificate.image ? <Image src={certificate.image} alt={`${certificate.title} certificate`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-2 transition-transform group-hover:scale-[1.03]" /> : <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-red-50 to-purple-50"><FileText className="mb-3 h-14 w-14 text-red-500" /><span className="font-bold text-red-600">PDF Certificate</span></div>}
              </div>
              <div className="p-5">
                <div className="flex gap-3"><Award className="mt-1 h-5 w-5 flex-shrink-0 text-primary" /><div><h3 className="font-bold text-gray-900 dark:text-white">{certificate.title}</h3><p className="mt-1 text-sm font-medium text-primary">{certificate.issuer}</p></div></div>
                <p className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{certificate.category}</p>
                <p className="mt-3 flex items-center text-sm text-gray-500"><Calendar className="mr-2 h-4 w-4" aria-hidden="true" />{certificate.date}</p>
                <a href={certificate.file} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white">View Certificate <ArrowRight size={16} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        {preview && <div className="text-center"><Link href="/certificates" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white">View All Certificates <ArrowRight size={18} /></Link></div>}
      </div>
    </section>
  );
};
export default Certificates;
