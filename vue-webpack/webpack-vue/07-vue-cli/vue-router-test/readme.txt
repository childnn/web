改变浏览器 url 改变, 而页面不刷新的方式:
  1. location.hash = 'uri'
  2. history.pushState({}, '', 'uri')
    # 入栈, 使用 history.back() 可以回退页面
    # 也可以使用 history.go(n) 前进/后退 n 个页面 (n 可正可负)
    # history.forward() 等价于 history.go(1)
  3. history.replaceState({}, '', '')  # 替换, 不可回退
-----------------
vue-router
1. 安装 vue-router
    $ npm i vue-router --save   # 运行时也需要, 使用 --save
2. 在模块化工程中使用它(它是一个插件, 可以通过 Vue.use() 来安装路由功能)
    2.1. 导入路由对象, 并且调用 Vue.use(VueRouter)
    2.2. 创建路由实例, 并且传入路由映射配置
    2.3. 在 Vue 实例中挂载创建的路由实例