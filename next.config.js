/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /three\/examples\/jsm\/.*/,
      use: 'babel-loader',
      exclude: /node_modules/
    });

    return config;
  },
  reactStrictMode: true
}
