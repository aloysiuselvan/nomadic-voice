import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Ganti URL localhost dengan URL produksi dari dashboard Vercel Anda
      { source: '/v1', destination: 'https://nomadic-v1.vercel.app/v1' },
      { source: '/v1/:path*', destination: 'https://nomadic-v1.vercel.app/v1/:path*' },

      { source: '/v2', destination: 'https://nomadic-v2.vercel.app/v2' },
      { source: '/v2/:path*', destination: 'https://nomadic-v2.vercel.app/v2/:path*' },

      { source: '/v3', destination: 'https://nomadic-v3.vercel.app/v3' },
      { source: '/v3/:path*', destination: 'https://nomadic-v3.vercel.app/v3/:path*' },

      { source: '/v4', destination: 'https://nomadic-v4.vercel.app/v4' },
      { source: '/v4/:path*', destination: 'https://nomadic-v4.vercel.app/v4/:path*' },
    ];
  },
};

export default nextConfig;