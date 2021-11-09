const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map'
}

module.exports = merge(baseConfig, config);