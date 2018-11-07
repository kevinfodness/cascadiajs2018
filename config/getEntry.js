/**
 * Given a mode (usually "development" or "production") returns the appropriate
 * entry configuration.
 * @param {string} mode - The mode to examine.
 * @returns {*}
 */
module.exports = function getEntry(mode) {
  // Only configure HMR in development.
  if (mode !== 'development') {
    return {
      problem3: './problem_3/src/index.js',
    };
  }

  return {
    problem3: [
      './problem_3/src/index.js',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
    ],
  };
};
