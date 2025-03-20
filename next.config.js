/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Deaktiver alle Next.js udviklingsindikatorer
  devIndicators: false,
  // React strikt tilstand for bedre udviklingsstabilitet
  reactStrictMode: true,
  // GitHub Pages støtte
  basePath: '/ekstrawork',
  assetPrefix: '/ekstrawork',
  images: {
    unoptimized: true,
  },
  output: 'export'
};

module.exports = nextConfig;