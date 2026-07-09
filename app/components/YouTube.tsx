"use client";
import React from 'react';
import { Play, Youtube as YoutubeIcon, ExternalLink } from 'lucide-react';

const YouTube: React.FC = () => {
  const videos = [
    {
      title: "Building AI Agents with LangGraph",
      description: "Complete tutorial on creating autonomous AI agents using LangGraph framework",
      thumbnail: "yt_1.png",
      duration: "15:30",
      url: "https://www.youtube.com/@DanishShahzadAI"
    },
    {
      title: "RAG Systems Explained",
      description: "Deep dive into Retrieval-Augmented Generation and its practical applications",
      thumbnail: "yt_2.png",
      duration: "12:45",
      url: "https://www.youtube.com/@DanishShahzadAI"
    },
    {
      title: "Custom Chatbot Development",
      description: "Step-by-step guide to building intelligent chatbots with Python and OpenAI",
      thumbnail: "yt_3.png",
      duration: "18:20",
      url: "https://www.youtube.com/@DanishShahzadAI"
    }
  ];

  const openVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="youtube" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center mb-4">
            <YoutubeIcon size={48} className="text-red-500 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              YouTube Channel
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Educational content on AI development, machine learning tutorials, and hands-on coding sessions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openVideo(video.url)}
            >
              <div className="relative group">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {video.description}
                </p>
                
                
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default YouTube;