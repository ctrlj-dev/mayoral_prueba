/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.mayoral.com'],
  },
  env: { BASE_URL: process.env.BASE_URL },
};
