import type { Metadata } from "next";
import Skills from "../components/Skills";
export const metadata: Metadata = { title: "Skills | Danish Shahzad", description: "Technical skills of Danish Shahzad across Python, machine learning, LangChain, RAG, data analytics, and modern AI development." };
export default function SkillsPage() { return <main><Skills /></main>; }
