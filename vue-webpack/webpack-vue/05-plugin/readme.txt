1. npm init
2. npm install --save-dev webpack
   npm install --save-dev webpack-cli
3. npm install vue --save@2。6
   npm i --save vue-loader@15.9.2
   npm i --save-dev vue-template-compiler
4. npm install --save-dev style-loader
   npm install --save-dev css-loader
   ... 可能需要的各种插件
# html-webpack-plugin
5. npm install --save-dev html-webpack-plugin
目前 index.html 放在项目的根目录下
  在真实发布项目时, 发布的是 dist 文件夹中的内容, 但是 dist 文件夹中如果没有 index.html 文件,
  那么打包的 js 等文件也就没有意义了. 所以, 需要将 index.html 文件打包到 dist 文件夹中,
  这个时候就可以使用 html-webpack-plugin 插件.
html-webpack-plugin 插件可以做的事情:
  1. 自动生成一个 index.html 文件, 可以指定模板来生成
  2. 将打包的 js 文件, 自动通过 script 插件插入到 body 中
使用, 修改 webpack.config.js 文件中的 plugins 属性
      plugins: [
        new VueLoaderPlugin(),
        new webpack.BannerPlugin('最终版权归 Child 所有'),
        new htmlWebpackPlugin({
          template: 'index.html'
        }),
      ],
 另, 需要删除 output 属性中的 publicPath 属性(如果有), 否则插入的 script 标签
 中的 src 可能会有问题.
------------------------------------------------------------------------------------
js 压缩插件:
    terser-webpack-plugin, uglifyjs-webpack-plugin
搭建本地服务器:
   webpack 提供了一个可选的本地开发服务器, 这个服务器基于 nodejs 搭建, 内部使用 express 框架, 可以实现我们想要的
   让浏览器自动刷新显式我们修改的结果. (热部署)
   不过它是一个单独的模块, 在 webpack 中使用之前需要先安装它
   $ npm i --save-dev webpack-dev-server
 dev-server 也是作为 webpack 的一个选项, 选项本身可以设置如下属性:
   contentBase: 为哪个文件夹提供本地服务, 默认是 root 目录, 这里设置为 ./dist
   port: 端口
   inline: true. 页面是否实时刷新
   historyApiFallback: 在 SPA 页面中, 依赖 HTML5 的 history 模式
   示例:
     devServer: {
       contentBase: './dist',
       inline: true, // 实时刷新
     }
在 package.json#scripts 增加启动参数:
  https://webpack.docschina.org/configuration/dev-server/#devserverport
    旧版本 webpack: "dev": "webpack-dev-server --open"  # --open 选项表示直接打开浏览器
    新版本 webpack: "dev": "webpack serve --mode development --open"
------------------------------------------------------------------------------------
plugin
 plugin 通常是对于某个现有的架构进行扩展.
 webpack 中的插件, 就是对 webpack 现有功能的各种扩展, 比如打包优化, 文件压缩等.
 ---
loader 和 plugin 对比
  loader 主要用于转换某些类型的模块, 它是一个转换器.
  plugin 是插件, 它是对 webpack 本身的扩展, 是一个扩展器.
plugin 使用过程,
  1. 通过 npm 安装需要使用的 plugins -- 某些 webpack 已经内置的插件不需要安装
    $ npm i --save-dev plugin-name
  2. 在 webpack.config.js 中的 plugins 中配置插件


