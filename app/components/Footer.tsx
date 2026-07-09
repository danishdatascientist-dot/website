"use client";
import React from 'react';
import { Heart, Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/danishshahzad17',
      icon: <Linkedin size={20} />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Danish7861',
      icon: <Github size={20} />
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@DanishShahzadAI',
      icon: <Youtube size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:me@danishagentic.com',
      icon: <Mail size={20} />
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Danish Shahzad</h3>
            <p className="text-gray-300 mb-4">
              Agentic AI Developer & Data Science Consultant passionate about building intelligent solutions 
              that transform businesses and improve lives.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Agentic AI/ML Consulting</li>
              <li>Custom Chatbot Development</li>
              <li>Data Science Solutions</li>
              <li>LangChain Applications</li>
  
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center justify-center text-center">
          <div className="text-gray-300 text-sm">
            © 2025 Danish Shahzad. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;