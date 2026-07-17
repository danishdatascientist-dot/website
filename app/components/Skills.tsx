"use client";
import React from 'react';
import { Brain, Code, Database, Cloud, Zap, Target } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "LLM Applications",
        "AI Agents & Workflows"
      ]
    },
    {
      title: "Programming & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Python",
        "LangChain/LangGraph",
        "TensorFlow/Keras",
        "FastAPI"
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "Data Analysis",
        "Statistical Modeling",
        "Data Visualization",
        "Data Wrangling"
      ]
    }
  ];

  const focusAreas = [
    {
      title: "Conversational AI",
      description: "Building intelligent chatbots and virtual assistants",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "RAG Systems",
      description: "Retrieval-Augmented Generation for document Q&A",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI Automation",
      description: "Streamlining business processes with AI workflows",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical expertise across the AI and data science spectrum
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Focus Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            AI Application Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div 
                key={index}
                className="group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className={`bg-gradient-to-r ${area.color} p-4 rounded-xl mb-4 inline-block`}>
                    <div className="text-white">
                      {area.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Technical Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Pinecone",
              "Sciket-Learn", "Streamlit", "FastAPI", "Langgraph", "Git", "Pandas"
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
