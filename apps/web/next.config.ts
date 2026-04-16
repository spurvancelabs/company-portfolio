import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for shared hosting
  output: 'export',
  
  // Disable image optimization (requires Node.js)
  images: {
    unoptimized: true,
  },
  
  // No trailing slashes for cleaner URLs
  trailingSlash: false,
  
  // Build-time environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.spurvancelabs.com',
  },
  
  // Output directory (default is 'out')
  distDir: 'out',
};

export default nextConfig;