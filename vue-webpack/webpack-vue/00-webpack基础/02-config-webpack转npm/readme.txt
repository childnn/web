利用 package.json 的命令映射, 进一步简化/规范化命令
1. npm init  # 生成 package.json
2. npm install  # 安装依赖, 生成 package-lock.json
3. 在 package.json#scripts 属性下, 建立命令映射
   比如: "build": "webpack --mode development"
   此后, 运行 $ npm run build 就相当于运行 $ webpack --mode development
  另: 在 package.json 中建立命令映射的好处在于, 这样的命令方式可以优先在 本地(local) -- 当前项目路径
  环境找依赖. 因为在实际开发中, 项目的依赖版本不一定于我们本机的全局依赖版本一致.
  可能每个项目不一样, 所以一般而言, 应使用每个项目自己的本地配置.
如何安装本地 webpack?
在项目目录下执行命令: 高版本 webpack webpack 和 webpack-cli 分开, 需要单独安装
    $ npm install webpack --save-dev
    $ npm install webpack-cli --save-dev
    如果需要指定版本, 可在 webpack 后加上 @版本号 即可
    # 上述两命令会在当前目录生成 node_modules 目录, 此即本地的 webpack
    在 package.json 会增加 "devDependencies" 属性 -- 即开发时依赖
此后再执行 $ npm run build 命令即可
