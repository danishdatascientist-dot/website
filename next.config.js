/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  // Emit a plain static site to out/. Every page here is prerendered and there
  // are no route handlers, so nothing needs a Node server at runtime.
  output: "export",
  images: {
    // The export target has no image optimization server.
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Rewrites are not applied to a static export. They exist only to proxy the
// local FastAPI backend while running `next dev`.
if (isDev) {
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
