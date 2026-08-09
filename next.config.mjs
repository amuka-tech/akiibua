/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/akiibua',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.js',
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
}

export default nextConfig
