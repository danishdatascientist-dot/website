import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Blog from './components/Blog';
import YouTube from './components/YouTube';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './globals.css';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Resume />
          <Blog />
          <YouTube />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
