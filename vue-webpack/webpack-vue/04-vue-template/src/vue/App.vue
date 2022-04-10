<!-- 模板 -->
<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn>
      <a href="#">替换默认插槽</a>
      <template #aaa>
        <button>替换具名插槽</button>
      </template>
    </Cpn>
  </div>
</template>

<!-- 脚本 -->
<script>
// 正常情况下, 必须加后缀,
// 如果想简写, 需要在 webpack.config.js 中配置属性
// resolve#extensions: 指定需要简写的文件扩展名
// import Cpn from "./Cpn.vue";
import Cpn from "./Cpn";

export default {

  name: 'App',
  components: {
    Cpn,
  },
  data () {
    return {
      message: 'Hello Webpack',
      name: 'Jack',
    };
  },
  methods: {
    btnClick () {
      alert("我是App.vue");
    }
  }
}
</script>

<!-- 样式 -->
<style scoped>

.title {
  color: green;
}

</style>
