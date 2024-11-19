import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['media.istockphoto.com'], // Add external domain here
  },
};

export default nextConfig;
