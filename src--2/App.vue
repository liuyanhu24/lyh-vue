<template>
 <div>
   <h1>App 组件适配</h1>
   <p>测试适配</p>
   <div class='box'>
     box
   </div>
 </div>
</template>

<script>
  export default{

  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import "./common/stylus/mixins.styl"
  p 
    width 375px
    height 64px
    background pink
  .box
    width 640px
    height 64px
    background green
</style>
