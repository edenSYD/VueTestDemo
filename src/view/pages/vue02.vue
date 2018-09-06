<template>
   <div id="vue02">
     <div v-html="message"></div>
     <label for="r1">修改颜色</label><input id="r1" type="checkbox" v-model="class1"/>
     <br><br>
     <div v-bind:class="{'class1':class1}">
       v-bind:class 指令
     </div>
   </div>
</template>

<script>
export default {
  name: 'vue02',
  data () {
    return {
      message: '<h1>菜鸟教程</h1>',
      class1: false
    }
  }
}
</script>

<style scoped>
  div{
    display: block;
  }
  .class1{
    background: #444;
    color: #eee;
  }
</style>
