import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/v1',

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;