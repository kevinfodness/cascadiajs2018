const path = require('path');
const getDevServer = require('./config/getDevServer');
const getEntry = require('./config/getEntry');
const getPlugins = require('./config/getPlugins');

module.exports = (env, argv) => {
  const { mode } = argv;

  return {
    devServer: getDevServer(mode),
    entry: getEntry(mode),
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /.jsx?$/,
          use: [
            'babel-loader',
            'eslint-loader',
          ],
        },
      ],
    },
    output: {
      filename: '[name].js',
        path: path.join(__dirname, 'problem_3/build'),
    },
    plugins: getPlugins(mode),
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
