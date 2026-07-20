import Image from "next/image";
import React from "react";
import { ExternalLink, Play, Youtube as YoutubeIcon } from "lucide-react";
import { contactDetails } from "@/data/contact";

const videos = [
  { title: "NVIDIA RTX Spark & The SaaSpocalypse: How AI Agents are Replacing Apps", duration: "6:57", views: "7 views", published: "3 weeks ago", url: "https://youtu.be/L-1hvH_oMPM?si=0rQwPx3Ief1LWaEK" },
  { title: "LinkedIn Creator Agent 🚀 | AI-Powered LinkedIn Content Generator with FastAPI & Gemini AI", duration: "3:55", views: "13 views", published: "4 weeks ago", url: "https://www.youtube.com/watch?v=T2T5dEC4CCs" },
  { title: "CareerPilot AI | AI Resume Analyzer, Job Matcher & Career Coach using FastAPI + Gemini", duration: "1:49", views: "14 views", published: "4 weeks ago", url: "https://www.youtube.com/watch?v=n8QPN_kJQCg" },
  { title: "AI-powered Gold & Silver Investment Intelligence", duration: "1:20", views: "8 views", published: "5 months ago", url: "https://youtu.be/lwFT439jRRM?si=YxeT4An2PAIaol-u" },
  { title: "Danish Automotive Sales | Modern Car Sales Website with Smart Chatbot", duration: "5:25", views: "54 views", published: "8 months ago" },
  { title: "AI Healthcare Assistant for UK Hospitals | Bradford UK Healthcare Market (RAG)", duration: "2:07", views: "49 views", published: "8 months ago" },
  { title: "Car Price Prediction Web App using FastAPI & Machine Learning", duration: "1:43", views: "108 views", published: "1 year ago" },
  { title: "AI Travel Planner with FastAPI + LangGraph – Plan Trips in Seconds!", duration: "1:58", views: "212 views", published: "1 year ago", url: "https://youtu.be/xVgsMu_pdRY?si=4lrUZeO1Au1h2oYI" },
  { title: "AI E-Commerce Chatbot | FastAPI + Google Gemini + AstraDB Vector Store | Real Project Demo (2025)", duration: "2:27", views: "173 views", published: "1 year ago", url: "https://youtu.be/kIVS8m9yrQs?si=vzLUsSmPz5en2Jcd" },
  { title: "Build a Multi-PDF Chatbot with LangChain + Gemini AI + FAISS | Ask PDFs Anything!", duration: "2:05", views: "241 views", published: "1 year ago", url: "https://youtu.be/Nl3vSJcA0Ls?si=OMluXPm2L-dCD4Nr" },
  { title: "AI-Powered Portfolio Website with Chatbot | Built by Danish Shahzad Using Pinecone Vector Database", duration: "0:49", views: "81 views", published: "1 year ago", url: "https://youtu.be/Bp3N2CDcguM?si=FQExmn0tduqgCoJv" },
  { title: "AI-Powered Blog Post Generator | Create Professional Blogs in Seconds | Best Blogging Tool 2024", duration: "1:55", views: "74 views", published: "1 year ago", url: "https://youtu.be/PHf6qKrziFM?si=J3yTWr5HX2s0fbif" },
  { title: "AI Chatbot for PDFs, ArXiv, YouTube, Text, and CSV Files | Interactive Q&A with Your Data", duration: "4:57", views: "112 views", published: "1 year ago", url: "https://youtu.be/Xv9L5NgJIQg?si=Ip85OIOPpnBOPR2E" },
];

const thumbnails = ["/yt_1.png", "/yt_2.png", "/yt_3.PNG", "/blog_1.png", "/blog_2.PNG", "/blog_3.png"];

const YouTube: React.FC = () => (
  <section className="bg-gray-50 py-20 dark:bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14 text-center">
        <YoutubeIcon size={48} className="mx-auto mb-4 text-red-500" />
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">YouTube Project Demos</h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">Danish Shahzad · @DanishShahzadAI · 30 subscribers · 13 videos</p>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-300">A channel focused on learning and growing together through practical AI, FastAPI, RAG, machine learning, and agentic application demos.</p>
        <a href={contactDetails.youtube} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700">Visit Channel <ExternalLink size={17} /></a>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => {
          const content = (
            <>
              <div className="relative h-48 overflow-hidden">
                <Image src={thumbnails[index % thumbnails.length]} alt={`${video.title} video thumbnail`} fill className="object-cover opacity-80 transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                <span className="absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white"><Play size={22} fill="currentColor" /></span></span>
                <span className="absolute bottom-2 right-2 rounded bg-black/85 px-2 py-1 text-xs font-semibold text-white">{video.duration}</span>
              </div>
              <div className="p-5"><h3 className="line-clamp-3 font-bold text-gray-900 dark:text-white">{video.title}</h3><p className="mt-3 text-sm text-gray-500">{video.views} · {video.published}</p><p className={`mt-3 text-sm font-semibold ${video.url ? "text-primary" : "text-gray-400"}`}>{video.url ? "Watch on YouTube" : "Video link coming soon"}</p></div>
            </>
          );
          return video.url ? <a key={video.title} href={video.url} target="_blank" rel="noopener noreferrer" className="group card-tilt overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-900">{content}</a> : <article key={video.title} className="group card-tilt overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-900">{content}</article>;
        })}
      </div>
    </div>
  </section>
);
export default YouTube;
