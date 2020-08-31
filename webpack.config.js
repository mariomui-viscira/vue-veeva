const path = require('path');
const srcPath = 'client/app/src';
const viewPath = 'client/app/src/views';
const sharedPath = 'client/app/src/shared';

const distPath = 'client/app/dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryFileLocation = path.resolve(__dirname, viewPath, 'main.js');
console.log(entryFileLocation);

const slides = ['firstslide', 'secondslide'];
const entryPoints = slides.reduce((accum, slideName) => {
  accum[slideName] = path.resolve(__dirname, viewPath, slideName, 'local.js');
  return accum;
}, {});

const htmlWebpackPluginConfigs = slides.map((slideName) => {
  return new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(srcPath, 'template.html'),
    chunks: [`${slideName}`],
    base: './',
    filename: `${slideName}/index.html`,
  });
});

module.exports = {
  mode: 'development',
  entry: {
    ...entryPoints,
    shared: path.resolve(__dirname, sharedPath, 'shared.js'),
  },
  output: {
    filename: '[name]/local.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'sass-loader',
      },
    ],
  },
  plugins: htmlWebpackPluginConfigs,
  devServer: {
    serveIndex: true,
    contentBase: [`${viewPath}/firstslide/`, `${viewPath}/secondslide`],
    contentBasePublicPath: ['/firstslide', '/secondslide'],
    watchContentBase: true,
    setup: function (app, server) {
      app.get('/', function (req, res) {
        res.redirect('/firstslide');
      });
    },
  },
};
