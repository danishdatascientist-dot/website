import React from "react";
import { Award, Calendar, Image as ImageIcon } from "lucide-react";

const certificates = [
  { title: "Agentic AI Certificate", issuer: "Issuing organization", date: "Date to be added" },
  { title: "Machine Learning Certificate", issuer: "Issuing organization", date: "Date to be added" },
  { title: "Data Science Certificate", issuer: "Issuing organization", date: "Date to be added" },
  { title: "Python Certificate", issuer: "Issuing organization", date: "Date to be added" },
  { title: "Cloud & Deployment Certificate", issuer: "Issuing organization", date: "Date to be added" },
  { title: "E-Commerce Certificate", issuer: "Issuing organization", date: "Date to be added" },
];

const Certificates: React.FC = () => (
  <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Professional learning across AI, data science, software development, and e-commerce
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <article
            key={certificate.title}
            className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up card-tilt"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-purple-500/10 to-secondary/20 flex flex-col items-center justify-center border-b border-gray-200 dark:border-gray-700">
              <ImageIcon className="w-12 h-12 text-primary mb-3" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Certificate image placeholder
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{certificate.issuer}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                {certificate.date}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
