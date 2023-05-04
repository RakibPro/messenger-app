/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'wallpapers.com', 'cdn.fansshare.com', 'i.ibb.co', 'platform-lookaside.fbsbx.com']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
