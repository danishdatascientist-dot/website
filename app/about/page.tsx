import type { Metadata } from "next";
import About from "../components/About";
export const metadata: Metadata = { title: "About | Danish Shahzad", description: "Learn about Danish Shahzad, an Agentic AI Engineer and Data Scientist working with RAG systems, machine learning, analytics, and intelligent applications." };
export default function AboutPage() { return <main><About /></main>; }
