const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge.merge(baseConfig, {
  // devServer
  devServer: {
    contentBase: './dist',
    inline: true, // 实时刷新
  }
});