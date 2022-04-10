
// 导出: 非 vue 方式
// 参见 App.vue
export default {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">点我点我</button>
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
};
