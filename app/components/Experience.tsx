"use client";
import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Agentic AI & Data Science Consultant",
      company: "Freelancing",
      period: "DEC 2018 – SEP 2024",
      location: "Remote",
      achievements: [
        "Delivered 100+ AI/ML projects for a global client base",
        "Specialized in chatbots, financial predictors, and Q&A systems",
        "Implemented AI workflows with LangChain, Streamlit, and FAISS"
      ],
      technologies: ["Python", "OpenAI API", "LangChain", "Streamlit", "FAISS", "TensorFlow"]
    },
    {
      title: "E-Commerce Strategy Consultant",
      company: "Baby Product Category | UK",
      period: "JAN 2021 – DEC 2023",
      location: "Remote",
      achievements: [
        "Led sales strategy and operational automation for baby products business",
        "Introduced data-driven decision-making frameworks",
        "Improved conversion rates and marketing ROI",
        "Directed cross-functional team for product sourcing and sales"
      ],
      technologies: ["Data Analytics", "Amazon FBA", "Market Research", "Business Intelligence"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building intelligent solutions and driving business growth through AI and data science
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-4">
                    <div className="flex items-center text-primary font-semibold">
                      <Award className="w-5 h-5 mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-5 h-5 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;