/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_API: process.env.BASE_API,
        SUB_API: process.env.SUB_API,
    },
    images: {
      domains: ['localhost'],
    },
}

module.exports = nextConfig
