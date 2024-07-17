/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    mixPanelToken: "f38c6b93c8967cf83631dd366d0655e5",
    openAiToken: "",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /three\/examples\/jsm\/.*/,
      use: "babel-loader",
      exclude: /node_modules/,
    });

    return config;
  },
  reactStrictMode: true,
};
