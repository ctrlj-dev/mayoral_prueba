/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['json.ctrlj.es'],
  },
  env: { BASE_URL: process.env.BASE_URL },
  sassOptions: {
    additionalData: `@import "src/styles/variable.scss";`,
  },
};
