import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Ganti URL localhost dengan URL produksi dari dashboard Vercel Anda
      { source: '/v1', destination: 'https://nomadic-voice-v1.vercel.app/' },
      { source: '/v1/:path*', destination: 'https://nomadic-voice-v1.vercel.app/' },

      { source: '/v2', destination: 'https://nomadic-voice-v2.vercel.app/' },
      { source: '/v2/:path*', destination: 'https://nomadic-voice-v2.vercel.app/' },

      { source: '/v3', destination: 'https://nomadic-voice-v3.vercel.app/' },
      { source: '/v3/:path*', destination: 'https://nomadic-voice-v3.vercel.app/' },

      { source: '/v4', destination: 'https://nomadic-voice-v4.vercel.app/' },
      { source: '/v4/:path*', destination: 'https://nomadic-voice-v4.vercel.app/' },
    ];
  },
};

export default nextConfig;