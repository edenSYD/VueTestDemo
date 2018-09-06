<template>
    <div id="vue01">
      <h1>site:{{site}}</h1>
      <h1>url: {{url}}</h1>
      <h1>{{details}}</h1>
    </div>
</template>

<script>
export default {
  name: 'vue01',
  data () {
    return {
      site: '菜鸟教程',
      url: 'www.runoob.com',
      details: '菜鸟教程- 学的不仅是技术，更是梦想！'
    }
  }
}
document.writeln('为啥会报错' + '<br>')
document.writeln('了解一下')
</script>

<style scoped>

</style>
