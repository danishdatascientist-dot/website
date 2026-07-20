import type { Metadata } from "next";
import Skills from "../components/Skills";
export const metadata: Metadata = { title: "Technical Skills — Python, ML, LangChain, Power BI", description: "Technical skills across Python, machine learning, LangChain, LangGraph, RAG, FastAPI, data analytics, Power BI, and e-commerce intelligence." };
export default function SkillsPage() { return <main><Skills /></main>; }
