由于直接在 html 引入 /src 下的 js 文件, 浏览器无法识别 commonjs 语法,
因此需要依赖 webpack 打包命令讲 src 下的文件打包为浏览器可解析的语法, 到指定目录 /dist
示例命令(当前目录): $ webpack --mode development ./src/main.js -o ./dist
即可在 ./dist 目录下生成 打包好的文件 main.js
注: 低版本的 webpack 的生成命令不太一样, 具体可上网查找

webpack 自动处理文件之间的依赖, 所以只需要指定一个入口文件即可

####
安装 webpack/webpack-cli 参见: vue/webpack/readme.txt
