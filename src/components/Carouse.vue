<template>
  <div class="hello">
    <el-carousel indicator-position="outside" :autoplay=false arrow="never" trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div class="float-circle" >
      <div class="normal"></div>
      <div class="normal"></div>
      <div class="active"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello
    position relative
    width 500px
    height 500px
    .el-carousel__item h3
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;

    .el-carousel__item:nth-child(2n)
        background-color: orange;

    .el-carousel__item:nth-child(2n+1)
        background-color: #d3dce6;
    .float-circle
        width 50px
        height 10px
        display flex
        justify-content space-around
        align-items center
        .normal
            width 10px
            height 10px
            border-radius: 50%
            background gray
        .active
            width 10px
            height 10px
            border-radius: 50%
            background orange
</style>
