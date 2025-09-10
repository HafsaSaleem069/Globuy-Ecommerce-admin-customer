/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/register/:path*",
        destination: "globuy-ecommerce-admin-customer-production.up.railway.app", // <-- Replace with Railway/Render/Backend URL
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
