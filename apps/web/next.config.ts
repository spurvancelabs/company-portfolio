import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // IMPORTANT: Use 'export' for static HTML output (works on shared hosting)
  output: 'export',
  
  // Disable image optimization (requires Node.js server)
  images: {
    unoptimized: true,
  },
  
  // Set base path if needed (empty for root domain)
  basePath: '',
  
  // Disable trailing slash for cleaner URLs with .html
  trailingSlash: false,
  
  // Environment variables that will be available at build time
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.spurvancelabs.com',
  },
  
  // Optional: Change output directory (default is 'out')
  distDir: 'out',
};

export default nextConfig;