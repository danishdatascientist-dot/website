import React from 'react';
import { Award, Users, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Applied AI Solutions",
      description: "From prototypes to production workflows"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Top Rated Freelancer",
      description: "100+ successful projects"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Expert in Modern AI",
      description: "LangChain, OpenAI, Pinecone"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Global Impact",
      description: "Clients across multiple industries"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - AI-themed Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI and Data Science"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform rotate-3 -z-10"></div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-float">
              AI
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              ML
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-8 space-y-4">
              <p>
                I am an Agentic AI Developer and Data Scientist focused on building practical
                solutions in machine learning, predictive modeling, NLP, and AI-driven automation.
              </p>
              
              <p>
                I've successfully completed 100+ global projects 
                spanning industries such as healthcare, e-commerce, and finance. I specialize in 
                building intelligent applications using Python, LangChain, LangGraph, OpenAI SDK, 
                and TensorFlow.
              </p>
              
              <p>
                My expertise includes designing document-aware chatbots, AI onboarding assistants, 
                and integrating AI into business workflows to streamline operations and optimize 
                performance.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
