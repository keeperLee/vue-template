<template>
    <div class="root">
        <div class="el-el-container">
            <el-table
                    :data="tableData"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: "ElementDemo",
    data(){
        return{
            array: [1,2,3],
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    },
    mounted() {
        const a = "{]"
        this.stack(a);
    },
    methods:{
      stack(s){
          const stack = [];
          for( let i = 0 ; i < s.length; i ++){
            debugger
            if(s[i]==='(' || s[i]=== '{' || s[i]==='['){
              stack.push(s[i]);
            }else{
              if(stack.length === 0){
                return false;
              }
              const front = stack.pop();
              if(front === '(' &&  s[i] !== ')'){
                return false;
              }
              if(front === '{' && s[i] !== '}' ){
                return false;
              }
              if(front === '[' && s[i] !== ']' ){
                return false;
              }

            }
          }
          return stack.length === 0;
      }
    },
    computed:{
        reverse(){
            return _.reverse(this.array)
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
