import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import MarkdownContent from "@/app/components/MarkdownContent";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import JsonLd from "@/app/components/JsonLd";
import { breadcrumbSchema, PERSON_ID, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  return post ? { title: `${post.title} | Danish Shahzad`, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { type: "article", title: post.title, description: post.excerpt, url: `${SITE_URL}/blog/${post.slug}`, images: [post.image], publishedTime: post.date } } : {};
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, datePublished: post.date, dateModified: post.date, image: `${SITE_URL}${post.image}`, mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`, author: { "@id": PERSON_ID }, publisher: { "@id": PERSON_ID } }} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "" }, { name: "Blog", path: "/blog" }, { name: post.title }])} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="block text-primary font-semibold mb-3">{post.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">{post.title}</h1>
        <div className="flex gap-6 text-gray-500 dark:text-gray-400 mb-10">
          <span className="flex items-center gap-2"><Calendar size={17} />{post.date}</span>
          <span className="flex items-center gap-2"><Clock size={17} />{post.readTime}</span>
        </div>
        <div className="relative aspect-[16/8] rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        </div>
        <MarkdownContent content={post.content} />
      </article>
    </main>
  );
}
