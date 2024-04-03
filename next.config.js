/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'medipractweb.s3.ap-south-1.amazonaws.com',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
