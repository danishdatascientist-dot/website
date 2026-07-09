"use client";
import React from 'react';
import { ExternalLink, Github, Bot, Brain, TrendingUp, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "TripCraft AI",
      description: "Agentic travel planner using LangGraph & FastAPI that generates complete trip plans based on user preferences including budget, travel mode, and destinations.",
      icon: <MapPin className="w-6 h-6" />,
      technologies: ["LangGraph", "FastAPI", "Tavily Search API", "PDF Generation"],
      features: [
        "Modular agent workflow with memory",
        "Real-time trip planning with PDF export",
        "Responsive UI with animations",
        "Dynamic plan generation"
      ],
      color: "from-blue-500 to-purple-600",
      liveUrl: "https://youtu.be/xVgsMu_pdRY?si=5dkoUksPiPWkfZgu",   
      githubUrl: "https://github.com/Danish7861"  
    },
    {
      title: "Multi-PDF Chat",
      description: "AI-powered document Q&A system enabling natural language interaction with multiple PDFs using LangChain, Google Gemini AI, and FAISS.",
      icon: <Bot className="w-6 h-6" />,
      technologies: ["LangChain", "Google Gemini AI", "FAISS", "PyPDF2", "Streamlit"],
      features: [
        "Multi-document conversational AI",
        "Semantic search with embeddings",
        "Context-aware responses",
        "Real-time chat interface"
      ],
      color: "from-green-500 to-teal-600",
      liveUrl: "https://youtu.be/Nl3vSJcA0Ls?si=NnXmu9aYET2AndNf",   
      githubUrl: "https://github.com/Danish7861"  
    },
    {
      title: "AI Customer Support System",
      description: "Intelligent e-commerce customer support agent with semantic search, dynamic query handling, and brand-aligned responses.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["LangChain", "OpenAI", "Pinecone", "Streamlit", "GitHub Actions"],
      features: [
        "Real-time conversational interface",
        "Semantic search capabilities",
        "Custom prompt engineering",
        "CI/CD deployment pipeline"
      ],
      color: "from-orange-500 to-red-600",
      liveUrl: "https://youtu.be/kIVS8m9yrQs?si=M7Iq3c3epQ9UmOBx",   
      githubUrl: "https://github.com/Danish7861"  
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Real-time sentiment analysis on Twitter data with stock price prediction using NLP and time-series forecasting models.",
      icon: <TrendingUp className="w-6 h-6" />,
      technologies: ["NLTK", "spaCy", "Twitter API", "Plotly", "Seaborn"],
      features: [
        "Real-time sentiment tracking",
        "Stock price correlation analysis",
        "Interactive data visualizations",
        "Predictive modeling"
      ],
      color: "from-purple-500 to-pink-600", 
      liveUrl: "https://youtu.be/PHf6qKrziFM?si=sYMd2w02XBpLQMAD",   
      githubUrl: "https://github.com/Danish7861"  
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative AI solutions that demonstrate my expertise in machine learning, NLP, and intelligent automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;