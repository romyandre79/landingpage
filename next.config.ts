import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false, // Temporary redirect so users aren't locked into English
      },
    ];
  },
};

export default nextConfig;
