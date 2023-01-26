/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: 'AIzaSyCaqWJhb2RksxjC8ZaUJ3_nO9gGjoTJpf0',
    GOOGLE_URL: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
  },
};

module.exports = nextConfig;
