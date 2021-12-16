1. 安装 node, node 自带 npm(node packages management)
    1.1. 配置全局路径:
        $ npm config set prefix “d:\nodejs\node_global”
    1.2. 配置缓存路径:
        $ npm config set cache “d:\nodejs\node_cache”
2. 安装 webpack: webpack 依赖 node 环境
    Webpack: 前端模块化打包工具
   全局安装: 也可以不指定版本, 默认最新
   webpack 4.x+ webpack 和 webpack-cli 分开, webpack 3 不需单独安装 cli
    $ npm install webpack@5.36.1 -g
    $ npm install webpack-cli -g   # 安装 webpack-cli
    $ webpack --version   # 检查 webpack 版本
    局部安装将 -g 替换为 --save-dev
    卸载使用 uninstall

配置 npm 国内镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 此后就可以使用 cnpm install ... 命令了

基本目录结构:
 /src: source 源码
 /dist: distribution 发布
 部署命令:
        # 只需打包 主 js 文件(入口文件), 会自动引入其依赖的 js
        # mode 三选一: development 模式打包为带注释的文件, production 打包为 mini 形式
        低版本: $ webpack --mode 'development | production | none' ./src/main.js ./dist/bundle.js  # bundle.js 是部署后的文件名
        高版本: $ webpack --mode 'development | production | none' ./src/main.js -o ./dist/bundle  # bundle 文件夹名
  定义 webpack.config.js 文件指定打包路径, 目标文件名,
  可以直接使用 $ webpack --mode 'xx' 命令打包, 无需在命令行中指定 路径/文件

---------------------------------------------------------------------------------------------

命令流程: 打包运行
1. $ npm init  # 生成 package.json, 一般 package.json 手动创建
    一般用 local webpack, 需要运行  --save-dev 参数可以放在后面, 也可以放在前面
    如果需要指定版本, 可在 webpack 后加上 @版本号 即可
    $ npm install webpack --save-dev
    $ npm install webpack-cli --save-dev
    # 上述两命令会在当前目录生成 node_modules 目录
2. $ npm install  # 安装依赖
3. $ webpack --mode development ./src/main.js -o ./dist/bundle    # 打包到 main.js 到指定目录, 打包后文件名也为 main.js
3~. 如果不使用 3 的命令, 创建 webpack.config.js 文件, 配置 webpack 命令的启动参数,
    指定 entry/output.path/output.filename   # 此时就指定了打包后的文件名, 与命令行方式的不同
4. 如果需要加载 css 等非 js 文件, 需要在 webpack.config.js 指定 module 属性, 加载相应的 loader

---------------------------------------------------------------------------------------------

将 $ webpack 命令映射到 $ npm run xx 命令: 在 package.json#scripts 中定义映射脚本
比如 在 package.json#scripts 中定义  "build": "webpack" 映射,
则 $ npm run build  就等价于 $ webpack 命令, 且 该命令优先使用 local 的 webpack, 如果本地没有, 则使用 global 配置
package.json 中的 scripts 的脚本在执行时, 会按照一定的顺序寻找命令对应的位置
    1. 首先, 会寻找本地的 node_modules/.bin 路径中对应的命令
    2. 如果没找到, 会去全局的环境变量中寻找
webpack-loader
    loader 是 webpack 中一个非常核心的概念
    开发中不仅有 js, 也需要加载 css, 图片, 也包括一些高级的将 ES6 转成 ES5 代码,
    将 TypeScript 转成 ES5 代码, 将 scss, less 转成 css, 将 .jsx, .vue 文件
    转为 js 文件等
    对于 webpack 本身, 不具备对这些转化的支持.
    要想实现上述功能, 给 webpack 扩展对应的 loader 即可.
 loader 使用过程:
    1. 通过 npm 安装需要使用的 loader
    2. 在 webpack.config.js 中的 module 关键字下进行配置
    大部分 loader 可以在 webpack 官网找到.
--- css
n ./src/css/normal.css 1:5
Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type,
currently no loaders are configured to process this file.
See https://webpack.js.org/concepts#loaders
--- 安装完毕(上述第 2 点) 需要的 loader, 运行 $ npm run build  执行打包任务

-------------


