import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "blog");

const parseFrontmatter = (source: string) => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(source);
  if (!match) throw new Error("Blog post is missing frontmatter.");

  const attributes = Object.fromEntries(
    match[1].split(/\r?\n/).filter(Boolean).map((line) => {
      const separator = line.indexOf(":");
      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
      return [key, value];
    })
  );

  return { attributes, content: match[2].trim() };
};

export const getAllPosts = (): BlogPost[] =>
  fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { attributes, content } = parseFrontmatter(source);
      return {
        slug,
        title: attributes.title,
        excerpt: attributes.excerpt,
        date: attributes.date,
        readTime: attributes.readTime,
        category: attributes.category,
        image: attributes.image,
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

export const getPostBySlug = (slug: string) =>
  getAllPosts().find((post) => post.slug === slug);
