<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/echarts">Echarts</router-link>|
      <router-link to="/element">Element</router-link>|
      <router-link to="/pagination">Pagination</router-link>|
      <router-link to="/slide">Slide</router-link>|
      <router-link to="/uploadDemo">UploadDemo</router-link>|
      <router-link to="/webSocketDemo">WebSocketDemo</router-link>|
      <router-link to="/Dthree">D3</router-link>|
      <router-link to="/carouse">Carouse</router-link>|
      <router-link to="/mapTalksDemo">MapTalksDemo</router-link>|
      <router-link to="/stringFormatter">StringFormatter</router-link>|
<!--        <el-card shadow="hover" style="width: 100px;height: 100px">-->
<!--            总是显示-->
<!--        </el-card>-->
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
*
    margin 0
    padding 0
    box-sizing border-box
#app
  position absolute
  width 100%
  height 100%
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
    #nav
        position relative
        width 80%
        height 80%
</style>
