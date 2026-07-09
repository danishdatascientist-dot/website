import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Automotive Engineering",
      institution: "NED University of Engineering and Technology",
      period: "Dec 2014 – Sep 2018",
      location: "Karachi, Pakistan",
      achievement: "Graduated with 2nd Position",
      description: "Specialized in automotive systems design and development with a focus on smart car design and hybrid driveline efficiency."
    }
  ];

  const diplomas = [
    {
      title: "Certified Cloud Native Applied Generative AI Engineer",
      institution: "PIAIC",
      period: "Feb 2023 – Jun 2024",
      description: "Comprehensive training in cloud-native technologies and generative AI models with focus on real-world applications.",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Amazon Private Label Diploma Track",
      institution: "Extreme Commerce",
      period: "Jan 2022 – Jul 2022",
      description: "Specialized training in private label business strategies, product research, sourcing, and brand building.",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Amazon FBA Wholesale Diploma Track",
      institution: "Extreme Commerce",
      period: "Jan 2022 – Mar 2022",
      description: "Focused on wholesale business models, supplier negotiations, and inventory management.",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Artificial Intelligence",
      institution: "PIAIC",
      period: "Jan 2019 – Jan 2021",
      description: "In-depth study of machine learning, data science, and AI methodologies with practical project implementation.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const certifications = [
    {
      title: "IBM Data Analysis with Python",
      issuer: "IBM",
      description: "Proficiency in data analysis techniques using Python, including data manipulation and visualization."
    },
    {
      title: "Machine Learning",
      issuer: "Stanford Online",
      description: "Deep understanding of machine learning principles, algorithms, and implementation through Python."
    },
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI",
      description: "Fundamentals of AI and its applications, focusing on business and societal impact."
    },
    {
      title: "Introduction to Programming Using Python",
      issuer: "Microsoft Technology Associate",
      description: "Foundational skills in Python programming, including syntax, control flow, and OOP concepts."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in AI, technology, and engineering
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-primary" />
            Formal Education
          </h3>
          
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all animate-slide-up"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-4">
                    <div className="flex items-center text-primary font-semibold">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-5 h-5 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-2" />
                      {edu.location}
                    </div>
                  </div>
                  <div className="bg-primary/10 px-4 py-2 rounded-lg inline-block mb-4">
                    <span className="text-primary font-semibold">{edu.achievement}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diplomas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary" />
            Professional Diplomas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diplomas.map((diploma, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${diploma.color} p-6 text-white`}>
                  <h4 className="text-xl font-bold mb-2">{diploma.title}</h4>
                  <p className="text-white/90">{diploma.institution}</p>
                  <p className="text-white/80 text-sm mt-1">{diploma.period}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300">{diploma.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary" />
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;