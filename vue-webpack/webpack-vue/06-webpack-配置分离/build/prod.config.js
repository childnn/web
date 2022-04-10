const terser = require('terser-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

// 配置合并
module.exports = webpackMerge.merge(baseConfig, {
  // 插件
  plugins: [

    // 压缩文件: 打包发布时需要, 开发时不需要
    // new UglifyJsPlugin(), // 压缩文件
    new terser(),
  ],
});
