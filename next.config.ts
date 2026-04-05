import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // This replaces the `next export` command
  images: {
    unoptimized: true, // Required for static export
  },
  // Add any other existing config options you have
};

export default nextConfig;
//import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
  /* config options here */
// };

// export default nextConfig;
