<template>
    <div class="root">
        <div class="el-el-pagination">
            <el-table :header-cell-style="getRowClass"
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
    data() {
        return {
            tableData: [],
            pageSize: 5,
            currentPage: 1,
            totalSize: 0
        }
    },
    mounted() {
        this.queryUserByPagination(this.currentPage);
    },
    methods: {
        getRowClass({row, column, rowIndex, columnIndex}) {
            if (rowIndex === 0) {
                return 'background:#c90a5b;color:#fff;text-align:center;font-size:9px;font-weight:500;'
            } else {
                return ''
            }
        }
        ,
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.queryUserByPagination(this.currentPage);
        }
        ,
        queryUserByPagination(pageIndex) {
            let that = this;
            this.$axios.get("http://localhost:8083/emp/getAllEmpByPage", {
                params: {
                    pageIndex: pageIndex,
                    pageSize: that.pageSize
                }
            }).then(function (response) {
                // console.log(response);
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

<style lang="stylus">
.root
    position: relative;
    width 50%
    height 100%
    .gutter
        width 0
    .el-el-pagination
        position relative
        margin-top 100px
        height auto
    // 滚动条的宽度
    .el-table__body-wrapper::-webkit-scrollbar {
        width: 12px; // 横向滚动条
        height: 12px; // 纵向滚动条 必写
    }
    // 滚动条的滑块
    .el-table__body-wrapper::-webkit-scrollbar-thumb {
        background-color: #ddd;
        border-radius: 6px;
}

</style>
