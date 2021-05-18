const path = require('path');

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
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader 只负责加载 css 文件, 不负责让 css 实际生效
        // style-loader 让 css 生效
        // webpack 使用多个 loader 时, 是从右往左加载的
        // 如果把 style-loader 放在后面, 打包 npm run build 会报错
        use: ['style-loader', "css-loader", ],
      },
    ]
  }
}