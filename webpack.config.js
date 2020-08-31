const path = require('path');
//TODO clean this up an place in env
const srcPath = 'client/app/src';
const viewPath = 'client/app/src/views';
// const sharedPath = 'client/app/src/shared';
const HtmlWebpackInjector = require('html-webpack-injector');

const distPath = 'client/app/dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
  resolve: {
    alias: [],
    extensions: ['vue', '.js', '.json', 'scss'],
  },
  entry: {
    ...entryPoints,
    shared: path.resolve(__dirname, viewPath, 'shared', 'local.js'),
  },
  output: {
    filename: '[name]/local.[hash].js',
  },
  module: {
    rules: [
      // {

      //   test: /\.scss$/, //turns css into stuff.
      //   use: [
      //     // 'vue-style-loader',
      //     'style-loader', //3. injects into the dom using style tags
      //     'css-loader', // 2. wraps our css in require/commonjs trappings so js can use it.
      //     'sass-loader', // 1. turns scss into css for step 2.
      //   ],
      // },
      // {
      //   test: /\.html$/,
      //   use: ['html-loader'],
      // },
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
      // ... other rules
      {
        test: /\.scss$/, //turns css into stuff.
        use: [
          // 'vue-style-loader',
          'style-loader', //3. injects into the dom using style tags
          'css-loader', // 2. wraps our css in require/commonjs trappings so js can use it.
          'sass-loader', // 1. turns scss into css for step 2.
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: [path.join(__dirname, srcPath)],
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
    ...htmlWebpackPluginConfigs,
    new HtmlWebpackInjector(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    serveIndex: true,
    // publicPath: '/assets/',
    //if you use publicpath, the content base public path must reflect
    contentBase: [
      `${distPath}/`,
      `${distPath}/firstslide`,
      `${distPath}/secondslide`,
      `${distPath}/shared`,
    ],
    contentBasePublicPath: ['/', '/firstslide', '/secondslide', '/shared'],
    watchContentBase: true,
    setup: function(app, server) {
      app.get('/', function(req, res) {
        res.redirect('/firstslide');
      });
    },
  },
};
