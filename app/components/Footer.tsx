import Link from "next/link";
import React from "react";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { contactDetails } from "@/data/contact";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "LinkedIn", url: contactDetails.linkedin, icon: <Linkedin size={20} /> },
    { name: "GitHub", url: contactDetails.github, icon: <Github size={20} /> },
    { name: "YouTube", url: contactDetails.youtube, icon: <Youtube size={20} /> },
    { name: "Email", url: contactDetails.mailto, icon: <Mail size={20} /> },
  ];
  return (
    <footer className="bg-gray-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="mb-4 block text-2xl font-bold">Danish Shahzad</Link>
          <p className="mb-5 text-gray-300">Agentic AI Engineer &amp; Data Scientist building practical intelligent systems.</p>
          <div className="flex gap-3">{socialLinks.map((link) => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="rounded-full bg-gray-800 p-2 hover:bg-primary">{link.icon}</a>)}</div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Services</h3>
          <div className="space-y-2 text-gray-300">
            <Link href="/services" className="block hover:text-primary">All Services</Link>
            <Link href="/services/ai-tutoring" className="block hover:text-primary">AI Tutoring</Link>
            <Link href="/services/consultation" className="block hover:text-primary">1:1 AI Consultation</Link>
            <Link href="/services/ecommerce-consulting" className="block hover:text-primary">E-Commerce Consulting</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Portfolio &amp; Background</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-300">
            {["about", "experience", "projects", "skills", "ecommerce-expertise", "certificates", "education", "resume"].map((route) => <Link key={route} href={`/${route}`} className="capitalize hover:text-primary">{route === "ecommerce-expertise" ? "E-Commerce Expertise" : route}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Connect</h3>
          <div className="mb-5 space-y-2 text-gray-300"><Link href="/blog" className="block hover:text-primary">Blog</Link><Link href="/contact" className="block hover:text-primary">Contact</Link></div>
          <Link href="/contact" className="inline-flex rounded-lg bg-primary px-5 py-3 font-semibold hover:bg-primary/90">Contact Me</Link>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 px-4 pt-8 text-center text-sm text-gray-400">© 2026 Danish Shahzad. All rights reserved.</div>
    </footer>
  );
};
export default Footer;
