/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bostonglobe-prod.cdn.arcpublishing.com"],
  },
};

module.exports = nextConfig;
