const path = require('path');
const getDevServer = require('./config/getDevServer');

module.exports = (env, argv) => {
  const { mode } = argv;

  return {
    devServer: getDevServer(mode),
    entry: {
      problem3: './problem_3/src/index.js',
    },
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
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
