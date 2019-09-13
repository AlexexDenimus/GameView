var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './build/',
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        // exclude: /node_modules/,
        // include: [
        //   path.resolve('node_modules', 'svelte-routing'),
        // ],
        loader: 'svelte-loader',
        options: {
          emitCss: true,
          hotReload: true,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },{
      test: /\.svg$/,
      loader: 'svg-inline-loader',
      options: {
        removeSVGTagAttrs: true
      }
    }
    ],
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin()]
};
