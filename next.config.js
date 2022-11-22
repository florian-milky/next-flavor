const generateWebpackBundleReport = require("./config/generateWebpackBundleReport");

const getWebpackConfig =
  () =>
  (config, { isServer, buildId }) => {
    generateWebpackBundleReport({
      config,
      isServer,
      buildId,
    });

    return config;
  };

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  webpack: getWebpackConfig(phase),
  experimental: {
    appDir: true,
  },
});

module.exports = nextConfig;
