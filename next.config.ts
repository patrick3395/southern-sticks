import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/southern-sticks",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/southern-sticks",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
