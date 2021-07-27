<template>
    <div class="root">
        <div class="SlideVerifyDemo">
            <slide-verify :l="42"
                          :r="10"
                          :w="310"
                          :h="155"
                          slider-text="向右滑动"
                          @success="onSuccess"
                          @fail="onFail"
                          @refresh="onRefresh"
            ></slide-verify>
            <div>{{msg}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SlideVerifyDemo",
    data(){
        return{
            msg:""
        }
    },
    mounted() {

    },
    methods:{
        onSuccess(){
            this.msg = 'login success'
            this.$notify.success("验证成功！")
        },
        onFail(){
            this.msg = ''
            this.$notify.warning("验证失败！")
        },
        onRefresh(){
            this.msg = ''
        }
    },
    computed:{

    }
}
</script>

<style scoped lang="stylus">
    .root
        position: relative;
        width 100%
        height 100%
        .SlideVerifyDemo
            position relative

</style>
