import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/v1', destination: 'http://localhost:3001/v1' },
      { source: '/v1/:path*', destination: 'http://localhost:3001/v1/:path*' },
      { source: '/v2', destination: 'http://localhost:3002/v2' },
      { source: '/v2/:path*', destination: 'http://localhost:3002/v2/:path*' },
      { source: '/v3', destination: 'http://localhost:3003/v3' },
      { source: '/v3/:path*', destination: 'http://localhost:3003/v3/:path*' },
      { source: '/v4', destination: 'http://localhost:3004/v4' },
      { source: '/v4/:path*', destination: 'http://localhost:3004/v4/:path*' },
    ];
  },
};

export default nextConfig;
