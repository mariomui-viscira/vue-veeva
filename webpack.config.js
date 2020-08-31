const path = require('path');
const srcPath = 'client/app/src';
const viewPath = 'client/app/src/views';
// const sharedPath = 'client/app/src/shared';
const HtmlWebpackInjector = require('html-webpack-injector');

const distPath = 'client/app/dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const entryFileLocation = path.resolve(__dirname, viewPath, 'main.js');
// console.log(entryFileLocation);

const slides = ['firstslide', 'secondslide'];
const entryPoints = slides.reduce((accum, slideName) => {
  accum[slideName] = path.resolve(__dirname, viewPath, slideName, 'local.js');
  return accum;
}, {});

const htmlWebpackPluginConfigs = slides.map((slideName) => {
  return new HtmlWebpackPlugin({
    inject: 'head',
    template: path.resolve(viewPath, slideName, 'index.html'),
    chunks: [`${slideName}`, 'shared'],
    base: './',
    filename: `${slideName}/index.html`,
  });
});

module.exports = {
  mode: 'development',
  entry: {
    ...entryPoints,
    shared: path.resolve(__dirname, viewPath, 'shared', 'local.js'),
  },
  output: {
    filename: '[name]/local.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/, //turns css into stuff.
        use: [
          'style-loader', //3. injects into the dom using style tags
          'css-loader', // 2. wraps our css in require/commonjs trappings so js can use it.
          'sass-loader', // 1. turns scss into css for step 2.
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // {
      //   test: /.(js)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: '[name]',
      //         esModule: false,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../node_modules/shared/local.js'),
    //     to: 'dist/shared', // 'static'
    //     ignore: ['.*'],
    //   },
    // ]),
    ...htmlWebpackPluginConfigs,
    // new HtmlWebpackInlineSourcePlugin(),
    new HtmlWebpackInjector(),
  ],
  devServer: {
    serveIndex: true,
    // publicPath: '/assets/',
    //if you use publicpath, the content base public path must reflect
    contentBase: [
      `${viewPath}/`,
      `${viewPath}/firstslide`,
      `${viewPath}/secondslide`,
      `${viewPath}/shared`,
    ],
    contentBasePublicPath: ['/', '/firstslide', '/secondslide', '/shared'],
    watchContentBase: true,
    // setup: function (app, server) {
    //   app.get('/', function (req, res) {
    //     res.redirect('/firstslide');
    //   });
    // },
  },
};
