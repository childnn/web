将 入口/出口 文件放入配置文件, 不用在命令行指显式指定
1. 手动创建 webpack.config.js, 指定 entry/output
2. 当前目录运行 $ webpack --mode development 命令, 此命令会加载 webpack.config.js
   从而生成 打包好的文件 /dist/bundle.js
