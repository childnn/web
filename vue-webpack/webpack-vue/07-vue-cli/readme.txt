node -v
npm -v
webpack -v
vue -V (大写, 或者 --version)

/3.0以下版本（默认安装最新版）
npm install vue-cli -g
//3.0以上版本（默认安装最新版）
npm install -g @vue/cli

//以下是安装指定版本
//3.0以下版本
npm install -g vue-cli@版本号
//3.0以上版本
npm install -g @vue/cli@版本号

Vue CLI
   使用 VueJS 开发大型应用时, 需要考虑代码目录结构, 项目结构和部署,热加载,代码单元测试等问题
   如果每个项目都需要手动从零开始, 那无疑效率比较低下, 所以通常会使用一些脚手架工具帮助完成这些事情
CLI: Command-Line Interface, 俗称脚手架
Vue CLI 是一个官方发布的 vue.js 项目脚手架
使用 vue-cli 可以快速搭建 Vue 开发环境以及对应的的 webpack 配置
全局安装 vue-cli
$ npm i -g @vue/cli
安装 vue 脚手架 2 模板
$ npm install @vue/cli-init -g

安装完毕:
初始化 Vue-CLI2 项目
$ vue init webpack <项目名>
Vue-CLI3 命令:
$ vue create <项目名>
-------------------------------
vue-cli2 与 vue-cli3
1. vue-cli 基于 webpack 4 打造, vue-cli 基于 webpack 3
2. vue-cli3 设计原则 "0 配置", 移除配置文件根目录下的 /build, /config 等目录
3. vue-cli3 提供了 vue ui 命令, 提供了可视化配置, 更人性化
4. 移除 static 文件夹, 新增了 public 文件夹, 并且将 index.html 移动到 /public 目录中
注: $ vue ui 为全局命令.
如果想自定义配置, 新建配置文件 vue.config.js
-------------------------------
vue runtime-only 和 runtime-compiler
 主要差别在 /src/main.js 中的 模拟板注册方式
 runtime-only 使用: render: h => h(App)

runtime-compiler(v1)
    template -> ast(abstract syntax tree) -> render -> vdom(virtual dom) -> UI
runtime-only(v2): 更小, 性能更好
    在解析 .vue 中的 template 时, 会使用 vue-template-compiler 将 template 转为 render 函数
    render -> vdom -> UI


