// 引入 path.js 模块, 获取当前路径  "__dirname"
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue loader 插件
const webpack = require('webpack'); // webpack 插件

// webpack.config.js 用来简化 $ webpack ./src/main.js -o ./dist/bundle 命令
// commonjs 规范
module.exports = {
  entry: './src/main.js',
  output: {
    // The provided value "./dist" is not an absolute path!
    // output.path 必须为绝对路径
    // __dirname 是全局变量, resolve 方法拼接路径得到绝对路径
    path: path.resolve(__dirname, 'dist'), // './dist', 动态获取绝对路径
    filename: 'bundle.js', // 文件名
    // publicPath: 'dist/', // 打包路径
  },
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        // 高版本
        // vue-loader was used without the corresponding plugin.
        // Make sure to include VueLoaderPlugin in your webpack config.
        /**
         * 解决上述错误的方式
         * 一. 降 vue-loader 版本
         *    npm uninstall vue-loader
              npm install vue-leader@14.2.2
           二. 配置 plugin
            在 webpack.config.js 引入配置
              const VueLoaderPlugin = require('vue-loader/lib/plugin');
               plugins: [
                  new VueLoaderPlugin(),
               ],
         *
         *
         */
        use: ['vue-loader']
      },
      // css
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归 Child 所有')

  ],
  resolve: {
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    // 简化扩展名
    extensions: ['.vue', '.js'],
  }
}