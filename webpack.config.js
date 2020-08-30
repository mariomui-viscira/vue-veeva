const path = require('path');
const srcPath = 'client/app/src';
const viewPath = 'client/app/src/views';
const distPath = 'client/app/dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryFileLocation = path.resolve(__dirname, viewPath, 'main.js');
console.log(entryFileLocation);
module.exports = {
  mode: 'development',
  entry: {
    firstslide: path.resolve(
      __dirname,
      viewPath,
      'firstslide',
      'firstslide.js'
    ),
  },
  output: {
    filename: '[name]/[name].js',
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
      filename: 'firstslide/index.html',
    }),
  ],
};
