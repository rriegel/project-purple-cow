const path = require('path');

const SRC_DIR = path.join(__dirname, '/src');
const OUT_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: path.resolve(OUT_DIR),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
}