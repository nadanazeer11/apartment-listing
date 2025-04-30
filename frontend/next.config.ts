import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "example.com", "images.unsplash.com"],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000",
  },
};

export default nextConfig;
