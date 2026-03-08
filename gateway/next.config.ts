import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Versi 1
      { source: '/v1', destination: 'https://nomadic-voice-v1.vercel.app/v1' },
      { source: '/v1/:path*', destination: 'https://nomadic-voice-v1.vercel.app/v1/:https://nomadic-voice-v1.vercel.app/v1' },

      // Versi 2
      { source: '/v2', destination: 'https://nomadic-voice-v2.vercel.app/v2' },
      { source: '/v2/:path*', destination: 'https://nomadic-voice-v2.vercel.app/v2/:https://nomadic-voice-v2.vercel.app/v2' },

      // Versi 3
      { source: '/v3', destination: 'https://nomadic-voice-v3.vercel.app/v3' },
      { source: '/v3/:path*', destination: 'https://nomadic-voice-v3.vercel.app/v3/:https://nomadic-voice-v3.vercel.app/v3' },

      // Versi 4
      { source: '/v4', destination: 'https://nomadic-voice-v4.vercel.app/v4' },
      { source: '/v4/:path*', destination: 'https://nomadic-voice-v4.vercel.app/v4/:https://nomadic-voice-v4.vercel.app/v4' },
    ];
  },
};

export default nextConfig;