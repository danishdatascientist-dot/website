"use client";
import React from 'react';
import { Download, Eye, Award, Briefcase, Code } from 'lucide-react';

const Resume: React.FC = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified in AI",
      description: "PIAIC, DeepLearning.AI, IBM, and Microsoft certifications"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "LangChain Expert",
      description: "Built RAG apps, chatbots, and AI assistants"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "E-commerce AI Strategy",
      description: "Led automation and optimization initiatives"
    }
  ];

  const handleDownload = () => {
    // In a real application, this would trigger a download of the actual PDF
    const link = document.createElement('a');
    link.href = 'cv_datascientist.pdf';
    link.download = 'Danish_Shahzad_CV.pdf';
    link.click();
  };

  const handleViewResume = () => {
    // In a real application, this would open the PDF in a new tab
    window.open('cv_datascientist.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my comprehensive CV to learn more about my professional journey and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Highlights */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Key Highlights
            </h3>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Resume Card */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 text-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Danish Shahzad
                </h3>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  AI Developer & Data Science Consultant
                </p>
                
                <div className="space-y-4">
                  <button
                    onClick={handleViewResume}
                    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Eye size={20} />
                    <span>View Resume</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="w-full bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Download size={20} />
                    <span>Download CV</span>
                  </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-300">
                    <div>
                      <div className="font-semibold text-primary">AI & Data</div>
                      <div>Solutions Focus</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">100+</div>
                      <div>Projects Completed</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">10+</div>
                      <div>Certifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
