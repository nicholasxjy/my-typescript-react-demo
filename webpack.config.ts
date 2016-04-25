/// <reference path="./typings/tsd.d.ts" />

import * as webpack from 'webpack';
import * as path from 'path';

const srcPath = path.join(__dirname, 'client', 'src');
const buildPath = path.join(__dirname, 'client', 'dist');

export default {
  context: srcPath,
  entry: [
    "webpack-hot-middleware/client",
    path.join(srcPath, 'index.js')
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'client')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      }
    ]
  }
}