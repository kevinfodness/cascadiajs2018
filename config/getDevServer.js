/**
 * Given a mode (usually "development" or "production") returns the appropriate
 * webpack-dev-server configuration.
 * @param {string} mode - The mode to examine.
 * @returns {*}
 */
module.exports = function getDevServer(mode) {
  // Only run webpack-dev-server in development mode.
  if (mode !== 'development') {
    return {};
  }

  return {
    contentBase: './problem_3',
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    noInfo: false,
    publicPath: '/problem_3/build',
    quiet: false,
    stats: { colors: true },
  };
};
