import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI & Data Science Blog — RAG, LangGraph, Python Tutorials",
  description: "Articles by Danish Shahzad about Agentic AI, data science, RAG systems, machine learning, and technology.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">Practical writing on AI systems, data science, and automation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <div className="relative h-56"><Image src={post.image} alt={post.title} fill className="object-cover" /></div>
              <div className="p-7">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3"><Calendar size={16} className="mr-2" />{post.date} · {post.readTime}</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-semibold">Read article <ArrowRight size={17} className="ml-2" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
