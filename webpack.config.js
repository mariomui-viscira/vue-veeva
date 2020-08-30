const path = require('path');
const srcPath = 'client/app/src';
const distPath = 'client/app/dist';
const entryFileLocation = path.resolve(__dirname, srcPath, 'main.js');
console.log(entryFileLocation);
module.exports = {
  entry: path.resolve(__dirname, srcPath, 'main.js'),
  output: path.resolve(__dirname, distPath),
  filename: '[name].bundle.js',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'sass-loader',
      },
    ],
  },
};
