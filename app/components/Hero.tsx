"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Youtube, Mail, Download } from 'lucide-react';
import { contactDetails } from '@/data/contact';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Danish Shahzad</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-primary mt-2">
                Agentic AI Engineer &amp; Data Scientist
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              I build practical agentic AI, generative AI, data science, machine learning, analytics, and automation solutions that turn complex information and business problems into useful applications, intelligent workflows, dashboards, and predictive systems.
            </p>
            <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">My work includes RAG systems, AI chatbots, LangChain, LangGraph, Model Context Protocol, Python, machine learning, data analytics, FastAPI, Streamlit, and e-commerce intelligence.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/projects"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 justify-center"
              >
                Explore Services
              </Link>
            </div>
            <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link href="/resume" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"><Download size={18} aria-hidden="true" /> Download Resume</Link>
              <Link href="/contact" className="font-semibold text-primary hover:underline">Contact Me</Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                <Github size={24} />
              </a>
              <a
                href={contactDetails.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                <Youtube size={24} />
              </a>
              <a
                href={contactDetails.mailto}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 md:w-88 md:h-88 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                  <Image
                    src="/datascientist.jpg"
                    alt="Danish Shahzad"
                    width={320}
                    height={320}
                    priority
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold animate-float">
                AI
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold animate-float" style={{ animationDelay: '1s' }}>
                ML
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
