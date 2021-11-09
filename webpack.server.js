const path = require('path');
const webpackNodeExternals  = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

/** @type {import('webpack').Configuration} */
const config = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);