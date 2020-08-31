const path = require('path');
const srcPath = 'client/app/src';
const viewPath = 'client/app/src/views';
const sharedPath = 'client/app/src/shared';

const distPath = 'client/app/dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryFileLocation = path.resolve(__dirname, viewPath, 'main.js');
console.log(entryFileLocation);
module.exports = {
  mode: 'development',
  entry: {
    firstslide: path.resolve(__dirname, viewPath, 'firstslide', 'local.js'),
    secondslide: path.resolve(__dirname, viewPath, 'secondslide', 'local.js'),
    shared: path.resolve(__dirname, sharedPath, 'shared.js'),
  },
  output: {
    filename: '[name]/local.js',
  },
  // output: {
  // filename: (pathData) => {
  //   return pathData.chunk.name === 'main' ? 'me.js' : 'you.js';
  // },
  // path: path.resolve(__dirname, distPath),
  // },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'sass-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(srcPath, 'template.html'),
      chunks: ['firstslide'],
      base: './',
      filename: 'firstslide/index.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(srcPath, 'template.html'),
      base: './',
      chunks: ['secondslide'],
      filename: 'secondslide/index.html',
    }),
  ],
};
