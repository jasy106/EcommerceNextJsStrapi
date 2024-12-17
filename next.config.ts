import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'faithful-birthday-77c52efc60.media.strapiapp.com',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
