/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/register/:path*",
  //       destination:
  //         "https://globuy-ecommerce-admin-customer-production.up.railway.app/register/:path*", // <-- Replace with Railway/Render/Backend URL
  //     },
  //   ];
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
