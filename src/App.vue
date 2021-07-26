<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/echarts">Echarts</router-link>|
      <router-link to="/element">Element</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
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
