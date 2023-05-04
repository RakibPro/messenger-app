/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co', 'platform-lookaside.fbsbx.com']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
