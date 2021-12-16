// 引入 vue 模块
import Vue from 'vue'
// import App from './vue/app.js' // 封装第一步
import App from './vue/App.vue' // 封装第二步

// 1. 抽取组件
// 2. 封装到 ./vue/app.js
/*const App = {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,
  data() {
    return {
      message: 'Hello Webpack',
      name: 'Jack',
    };
  },
  methods: {
    btnClick() {
      alert("fafdsfs");
    }
  }
};*/

const app = new Vue({
  el: '#app',
  // 使用 组件
  template: `<App/>`,
  components: {
    App // 注册组件
  }
});


//////////////////////////////////////////
// 原始方式
// const app1 = new Vue({
//
//   // 同时存在 el 和 template 时
//   // 在运行时, el 对应的内容会被替换为 template 的内容
//   el: '#app1',
//   template: `
//     <div>
//       <h2>{{message}}</h2>
//       <button @click="btnClick">按钮</button>
//       <h2>{{name}}</h2>
//     </div>
//   `,
//   data: {
//     message: 'Hello Webpack',
//     name: 'Jack'
//   },
//   methods: {
//     btnClick() {
//       alert("点击");
//     }
//   }
// });