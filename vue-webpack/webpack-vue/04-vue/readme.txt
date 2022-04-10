1. npm init   # package.json
2. npm install --save-dev webpack
   npm install --save-dev webpack-cli
3. npm install --save vue  # vue 不仅仅是开发时依赖, 因此不使用 --save-dev
   配置 webpack.config.js 文件
   执行 $ npm run build 后打开 index.html
   浏览器错误信息:
   vue.runtime.esm.js:623 [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available.
   Either pre-compile the templates into render functions, or use the compiler-included build.
 Vue 有两个版本:
    1. runtime-only: 代码中不可有任何 template
    2. runtime-compiler: 包含 template compiler
  在 webpack.config.js 中增加属性
     resolve: {
        // 别名
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
再次 $ npm run build