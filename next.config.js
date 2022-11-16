/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVICE: process.env.SERVICE || "",
    TEMPLATE: process.env.TEMPLATE || "",
    ID: process.env.ID || "",
  },
};

module.exports = nextConfig;
