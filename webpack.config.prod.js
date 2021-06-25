const webpack = require('webpack');

module.exports = function() {
  console.log('\x1b[36m%s\x1b[0m', 'Building for production ...');
  // Adds everything from "common.js" to a new object called prodConfig
  const prodConfig = Object.assign({}, require('./webpack.config.js'));
  prodConfig.mode='production';
//  prodConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));



  return prodConfig;
};