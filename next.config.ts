import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 보안 장치. 이미지를 맘대로 설정하지 못하게
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
