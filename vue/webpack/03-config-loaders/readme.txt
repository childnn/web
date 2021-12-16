如何加载 非 js 文件(模块)?
loaders
1. npm init        # 生成 package.json
2. npm install --save-dev webpack
   npm install --save-dev webpack-cli
3. 在 package.json#scripts 属性增加 命令映射
    "build": "webpack --mode development"
 此时会报错
    You may need an appropriate loader to handle this file type,
    currently no loaders are configured to process this file.
    See https://webpack.js.org/concepts#loaders
 缺少解析 css/less 的 loaders
4. 在 webpack 官网找到 loader, 执行命令, 安装 css-loader, style-loader 依赖
    npm install --save-dev css-loader
    npm install --save-dev style-loader
    如果有 less, 则需安装 less-loader
    npm install less less-loader --save-dev
    # 这里的 less 是指 less 包, 将 less 转为 css
5. 在 webpack.config.js 增加 module#rules 属性
   官网也有对应的属性设置, 直接 copy
6. 运行 $ npm run build 打开 index.html 看效果
7. 图片: file-loader

----
ES6 语法处理
$ npm install --save-dev babel-loader babel-core babel-preset-es2015   # deprecated
$ npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack


