/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/register/:path*",
        destination: "https://your-backend-url.onrender.com/register/:path*", // <-- Replace with Railway/Render/Backend URL
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
