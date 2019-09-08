var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: './build/'
  },
  devtool: 'source-map'
};