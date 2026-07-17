import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import EcommerceExpertise from './components/EcommerceExpertise';
import Services from './components/Services';
import Blog from './components/Blog';
import YouTube from './components/YouTube';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './globals.css';

export default function Home() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certificates />
          <EcommerceExpertise />
          <Services />
          <Blog />
          <YouTube />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}
