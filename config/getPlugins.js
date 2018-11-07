const webpack = require('webpack');

/**
 * Given a mode (usually "development" or "production") returns the appropriate
 * plugins configuration.
 * @param {string} mode - The mode to examine.
 * @returns {*}
 */
module.exports = function getPlugins(mode) {
  // Only configure HMR in development.
  if (mode !== 'development') {
    return [];
  }

  return [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ];
};
