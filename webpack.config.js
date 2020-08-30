const path = require('path');
const srcPath = 'client/app/src/views';
const distPath = 'client/app/dist';
const entryFileLocation = path.resolve(__dirname, srcPath, 'main.js');
console.log(entryFileLocation);
module.exports = {
  entry: './client/app/src/main.js',
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
    },
    path: path.resolve(__dirname, distPath),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'sass-loader',
      },
    ],
  },
};
