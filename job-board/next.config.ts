import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com"], // Allow Google-hosted images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
