import type { Metadata } from "next";
import Projects from "../components/Projects";
import YouTube from "../components/YouTube";
export const metadata: Metadata = { title: "Projects | Danish Shahzad", description: "AI and data science projects by Danish Shahzad, including RAG systems, AI agents, chatbots, analytics, and machine learning applications." };
export default function ProjectsPage() { return <main><Projects /><YouTube /></main>; }
