import Image from "next/image";
import React from "react";
import {
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { educationItems, type EducationItem } from "@/data/education";
import { educationCertificates } from "@/data/educationCertificates";

const typeLabel: Record<EducationItem["type"], string> = {
  education: "Formal Education",
  diploma: "Professional Diploma",
  training: "Professional Training",
};

const typeIcon: Record<EducationItem["type"], React.ReactNode> = {
  education: <GraduationCap className="h-6 w-6" />,
  diploma: <Award className="h-6 w-6" />,
  training: <BookOpen className="h-6 w-6" />,
};

const EducationCard = ({ item }: { item: EducationItem }) => (
  <article className="card-tilt relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-lg dark:border-gray-700 dark:bg-gray-900 md:p-9">
    <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b from-primary to-secondary" />
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
            {typeIcon[item.type]}
            {typeLabel[item.type]}
          </span>
          <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-lg font-semibold text-primary">
            {item.institution}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300 sm:flex-row sm:flex-wrap lg:max-w-sm lg:justify-end">
          <span className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800">
            <Calendar className="h-4 w-4 text-primary" />
            {item.startDate} – {item.endDate}
          </span>
          {item.location && (
            <span className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800">
              <MapPin className="h-4 w-4 text-primary" />
              {item.location}
            </span>
          )}
        </div>
      </div>

      {item.achievement && (
        <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 font-semibold text-purple-700 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-300">
          <Award className="h-5 w-5" />
          {item.achievement}
        </div>
      )}

      <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
        {item.description}
      </p>

      <div>
        <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
          What I Learned
        </h4>
        <ul className="grid gap-x-8 gap-y-3 lg:grid-cols-2">
          {item.learningOutcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 leading-7 text-gray-600 dark:text-gray-300"
            >
              <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-6 dark:border-gray-700">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const Education: React.FC = () => {
  const formalEducation = educationItems.filter(
    (item) => item.type === "education",
  );
  const professionalTraining = educationItems.filter(
    (item) => item.type !== "education",
  );

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Education & Certifications
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-xl leading-8 text-gray-600 dark:text-gray-300">
            Continuous learning and professional development across data
            science, artificial intelligence, technology, e-commerce, and
            engineering.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
            <GraduationCap className="text-primary" />
            Formal Education
          </h2>
          <div className="space-y-8">
            {formalEducation.map((item) => (
              <EducationCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
            <BookOpen className="text-primary" />
            Professional Diplomas and Training
          </h2>
          <div className="space-y-8">
            {professionalTraining.map((item) => (
              <EducationCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-white">
              <Award className="text-primary" />
              Professional Certificates
            </h2>
            <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-300">
              Selected certificates supported by files in the portfolio
              certificate archive.
            </p>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {educationCertificates.map((certificate) => (
              <article
                key={certificate.file}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="relative aspect-[4/3] border-b border-gray-200 bg-white dark:border-gray-700">
                  {certificate.type === "image" ? (
                    <Image
                      src={certificate.file}
                      alt={`${certificate.title} certificate`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-red-50 to-purple-50">
                      <FileText className="mb-3 h-14 w-14 text-red-500" />
                      <span className="font-bold text-red-600">
                        PDF Certificate
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary">
                    {certificate.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {certificate.issuer}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Issued {certificate.date}
                  </p>
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
