const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
