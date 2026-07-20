/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: async () => [
    { source: "/blog_1.png", destination: "/rag-systems-langchain-guide.png", permanent: true },
    { source: "/blog_2.PNG", destination: "/langgraph-ai-application-framework.png", permanent: true },
    { source: "/blog_3.png", destination: "/ai-agents-business-automation.png", permanent: true },
  ],
};

if (process.env.NODE_ENV === "development") {
  nextConfig.rewrites = async () => [
    {
      source: "/api/py/:path*",
      destination: "http://127.0.0.1:8000/api/py/:path*",
    },
    {
      source: "/docs",
      destination: "http://127.0.0.1:8000/api/py/docs",
    },
    {
      source: "/openapi.json",
      destination: "http://127.0.0.1:8000/api/py/openapi.json",
    },
  ];
}

module.exports = nextConfig;
