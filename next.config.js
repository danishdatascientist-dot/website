/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
