// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  images: {
    domains: ['example.com'], // Allow images from example.com domain
  },
};

export default nextConfig;
