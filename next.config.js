/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "i.ytimg.com"],
  },
};

module.exports = nextConfig;
