/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/akiibua',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
}

export default nextConfig
