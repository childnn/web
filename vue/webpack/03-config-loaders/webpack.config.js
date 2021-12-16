// 引入 path.js 模块, 获取当前路径  "__dirname"
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
    // publicPath: 'dist/', // 打包路径
  },
  module: {
    rules: [
      // css
      {
        test: /\.css$/i,
        // css-loader 只负责加载 css 文件, 不负责让 css 实际生效
        // style-loader 让 css 生效
        // webpack 使用多个 loader 时, 是从右往左加载的
        // 如果把 style-loader 放在后面, 打包 npm run build 会报错
        // 可以切换以下两种方式, 查看 css 文件是否会会生效
        // use: ["css-loader", ],
        use: ['style-loader', "css-loader",],
      },
      // less
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      // file-loader: ref-loader
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            // 文件名默认是随机生成的, 可以通过 options#name 显式指定自定义的生成的文件名
            options: {
              // name: 'my_img.jpg',
              name: 'img/[name].[ext]',
              // name(file) {
              //   if (env === 'development') {
              //     return 'img/[name].[ext]';
              //   }
              //   return '[hash:8].[ext]';
              // },
              // 字节: byte
              limit: 1024
            }
          }
        ]
      },
      // url-loader
      // {
      //   test: /\.(png|jpg|jpeg|gif)&/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192
      //       }
      //     }
      //   ],
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }
}