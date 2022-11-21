const path = require("path");

/**
 * webpack bundle report
 */
const generateBundleReport = process.env.NODE_ENV === "production";

const getFilePath = ({ buildId, extension }) =>
  path.join(
    "./build-reports",
    buildId,
    "reports/bundles",
    `client.${extension}`
  );

module.exports = ({ config, isServer, buildId }) => {
  if (isServer || !generateBundleReport) {
    // server report is quite useless
    return;
  }
  const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      generateStatsFile: true,
      statsOptions: {
        preset: "minimal",
        source: false,
      },
      reportFilename: getFilePath({ buildId, extension: "html" }),
      statsFilename: getFilePath({ buildId, extension: "json" }),
      openAnalyzer: true,
    })
  );
  return config;
};
