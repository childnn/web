<template>
  <div>
    <h2>我是 User 界面</h2>
    我是 user content
    <!-- 这里的 $route 表示的是当前活跃路由
     params 后面的 key 就是 /router/index.js 中定义的动态路由的属性名
     -->
    {{$route.params.userId}}
    {{userId}}
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.userId;
      }
    }
  }
</script>

<style scoped>

</style>
