<template>
    <div class="about">

        <div class="base"></div>
        <h1>This is an about page</h1>
        <i class="el-icon-share" style="color: red"></i>
        <el-button>element-ui的按钮</el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-platform-eleme">饿了么</el-button>
        {{ getStateNumber }}
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
            <div class="back-to-up">
                UP
            </div>
        </el-backtop>
        <p>段落</p>
    </div>
</template>


<script>
import * as d3 from 'd3'

export default {
    name: "about",
    data() {
        return {}
    },
    mounted() {
        this.queryAllUser();
        this.queryUserById();
        this.draw();
        this.testMap();
    },
    methods: {
        testMap() {
            let map = new Map([
                [1, 'one'],
                [2, 'two'],
                [3, 'three'],
            ]);
            console.log(typeof map)
            for(let key of map.keys()){
                console.log(key)
            }
            for(let value of map.values()){
                console.log(value)
            }
            for(let item of map.entries()){
                console.log(item)
            }
            // let cloneMap = JSON.parse(JSON.stringify(map));
            // for(let key of cloneMap.keys()){
            //     console.log(key)
            // }
        },
        queryAllUser() {
            this.$axios.get("http://localhost:8083/user/getAllUser").then(function (response) {
                // handle success
                console.log(response);
            }).catch(function (error) {
                // handle error
                console.log(error);
            }).then(function () {
                // always executed
            });
        },
        queryUserById() {
            this.$axios.get("http://localhost:8083/user/getUserById", {
                params: {
                    id: '3'
                }
            }).then(function (response) {
                // handle success
                console.log(response);
            }).catch(function (error) {
                // handle error
                console.log(error);
            }).then(function () {
                // always executed
            });
        },
        draw() {
            d3.selectAll("p").style("color", function () {
                return "hsl(" + Math.random() * 360 + ",100%,50%)";
            });
        }
    },
    computed: {
        getStateNumber() {
            return this.$store.getters.getNumberOne;
        }
    }
}
</script>

<style scoped lang="stylus">
    .base
        width: 100px;
        height: 100px;
        display: inline-block;
        background-color: #0EA9FF;
        border-width: 5px;
        border-style: solid;
        border-color: #5daf34;
        transition-property: width, height, background-color, border-width;
        transition-duration: 2s;
        transition-timing-function: ease-in;
        transition-delay: 500ms;
        &:hover
            width: 200px;
            height: 200px;
            background-color: #5daf34;
            border-width: 10px;
            border-color: #3a8ee6;

</style>
