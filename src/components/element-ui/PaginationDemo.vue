<template>
    <div class="root">
        <div class="el-el-pagination">
            <el-table
                    :data="tableData"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="id"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="age"
                        label="年龄">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="邮箱">
                </el-table-column>
            </el-table>
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="totalSize">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "ElementDemo",
    data(){
        return{
            tableData:[],
            pageSize:3,
            currentPage:1,
            totalSize:0
            // tableData: [{
            //     date: '2016-05-03',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-02',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-04',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-01',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-08',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-06',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }, {
            //     date: '2016-05-07',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1518 弄'
            // }]
        }
    },
    mounted() {
        this.queryUserByPagination(this.currentPage);
    },
    methods: {
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.queryUserByPagination(this.currentPage);
        },
        queryUserByPagination(pageIndex) {
            let that = this;
            this.$axios.get("http://localhost:8083/emp/getAllEmpByPage",{params:{
                    pageIndex:pageIndex,
                    pageSize:that.pageSize
                }}).then(function (response) {
                console.log(response);
                // handle success
                that.tableData = response.data.list;
                that.totalSize = response.data.totalSize;
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

<style scoped lang="stylus">
    .root
        position: relative;
        width 100%
        height 100%
        .el-el-container
            position relative

</style>
