import React from 'react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Building Intelligent RAG Systems with LangChain",
      excerpt: "Learn how to create powerful document-aware AI assistants using Retrieval-Augmented Generation techniques.",
      date: "2025-07-10",
      readTime: "8 min read",
      category: "AI Development",
      image: "blog_1.png",
      link: "https://ai-stories-by-ds.blogspot.com/2025/07/building-intelligent-rag-systems-with.html" 
    },
    {
      title: "The Future of AI Agents in Business Automation",
      excerpt: "Exploring how autonomous AI agents are transforming business workflows and operational efficiency.",
      date: "2025-07-10",
      readTime: "6 min read",
      category: "AI Strategy",
      image: "blog_2.PNG",
      link: "https://ai-stories-by-ds.blogspot.com/2025/07/the-future-of-ai-agents-in-business.html" 
    },
    {
      title: "LangGraph: Next-Generation AI Application Framework",
      excerpt: "Deep dive into LangGraph's capabilities for building complex, stateful AI applications.",
      date: "2025-07-10",
      readTime: "10 min read",
      category: "Technical Tutorial",
      image: "blog_3.png",
      link: "https://ai-stories-by-ds.blogspot.com/2025/07/langgraph-next-generation-ai.html" 
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on AI development, machine learning, and the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Read More
                <ArrowRight size={16} className="ml-2" />
              </a>

              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
       
      </div>
    </section>
  );
};

export default Blog;