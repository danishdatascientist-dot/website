import type { Metadata } from "next";
import Projects from "../components/Projects";
import YouTube from "../components/YouTube";
export const metadata: Metadata = { title: "AI & Data Science Projects — RAG, Agents, Analytics", description: "Explore Danish Shahzad's practical projects across RAG systems, AI agents, machine learning, chatbots, inventory analysis, and data analytics." };
export default function ProjectsPage() { return <main><Projects /><YouTube /></main>; }
