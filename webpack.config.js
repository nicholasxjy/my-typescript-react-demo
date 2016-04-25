"use strict";
var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'client', 'src');
var buildPath = path.join(__dirname, 'client', 'dist');
exports.__esModule = true;
exports["default"] = {
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
};
