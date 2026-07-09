"use client";
import React from 'react';
import { Brain, Code, Database, Cloud, Zap, Target } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Deep Learning", level: 90 },
        { name: "LLM Applications", level: 92 },
        { name: "AI Agents & Workflows", level: 91 }
      ]
    },
    {
      title: "Programming & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 96 },
        { name: "LangChain/LangGraph", level: 93 },
        { name: "TensorFlow/Keras", level: 88 },
        { name: "FastAPI", level: 85 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Data Analysis", level: 94 },
        { name: "Statistical Modeling", level: 89 },
        { name: "Data Visualization", level: 87 },
        { name: "Data Wrangling", level: 83 }
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
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
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