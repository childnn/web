<template>
  <div>
    <h2>我是 cpn 组件的标题</h2>
    <slot>默认内容</slot>
    <p>我是 cpn 组件的内容, 哈哈</p>
    <slot name="aaa">具名插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data () {
    return {
      name: 'Cpn name'
    }
  }
}
</script>

<style scoped>

</style>
