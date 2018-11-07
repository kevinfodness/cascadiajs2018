const path = require('path');

module.exports = {
  entry: {
    problem3: './problem_3/src/index.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /.js$/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'problem_3/build'),
  },
};
