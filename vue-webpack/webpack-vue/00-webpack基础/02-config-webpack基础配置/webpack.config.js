// commonjs 导入
const path = require('path');

// commonjs 规范
module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    //  The provided value "./dist" is not an absolute path!
    // output.path 必须为绝对路径
    // __dirname 是全局变量, resolve 方法拼接路径得到绝对路径
    path: path.resolve(__dirname, 'dist'), // './dist', 动态获取绝对路径
    filename: 'bundle.js', // 文件名
  },
}
