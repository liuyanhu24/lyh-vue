<template>
 <div>
   <h1>App 组件适配</h1>
   <button class='btn btn1'>1</button>
   <button class='btn btn2'>2</button>
   <p>我和我的祖国一刻也不能分割</p>
   <ul>
      <li @click="choose(index)" :class="{active: navIndex === index}" v-for="(item, index) in 20" :key="index">{{item}}</li>
   </ul>
 </div>
</template>

<script>
  export default{
   data() {
     return {
       navIndex:0
     }
   },
   methods: {
     choose(index){
       this.navIndex = index
     }
   },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import "./common/stylus/mixins.styl"
  $color = green 
  $color2 = pink 
  btnStyle(w,h,bg)
     width w
     height h
     border none 
     background bg

  add(a,b)
    a+b
  h1
    color $color
  p
    color $color2
  .btn1 
    btnStyle(100px,100px,red)
    box-sizing content-box
    padding add(30px,10)
  .btn2
    btnStyle(200px,100px,$color2)
  ul
    li
      line-height add(30px,20)
      padding-left 30px
      bottom-border-1px($color2)
      &.active
        color hotpink 
</style>
