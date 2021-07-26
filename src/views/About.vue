<template>
    <div class="about">
        <h1>This is an about page</h1>
        <el-button>element-ui的按钮</el-button>
    </div>
</template>


<script>
export default {
    name:"about",
    data(){
        return {

        }
    },
    mounted() {
        this.queryAllUser();
        this.queryUserById();
    },
    methods: {
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
            this.$axios.get("http://localhost:8083/user/getUserById",{params:{
                    id:'3'
                }}).then(function (response) {
                // handle success
                console.log(response);
            }).catch(function (error) {
                // handle error
                console.log(error);
            }).then(function () {
                // always executed
            });
        }
    }
}
</script>
