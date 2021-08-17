<template>
    <div class="root">
        <div class="StringFormatter">
            <div class="show" style="white-space: pre-wrap">{{formatterString}}</div>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3';
export default {

    name: "StringFormatter",
    data(){
        return{
            data: [73,52,33,22,14,68],
            formatterString:''
        }
    },
    mounted() {
        // this.draw();
        this.formatterString = `110.99999999,\n31.4343243241324132,34.143324234,23.3243241234432,21.324324234,13.12343243244,77.324324234,66.12343243244`
        let value = this.formatterString;
        setTimeout(()=>this.formatter(value),5000)


    },
    methods:{
        formatter(value){
            console.log(value.split(","));
            let array = value.split(",");
            let resultArray = [];
            for(let i = 0 ; i < array.length; i +=2){
                let tempArray = [];
                tempArray.push(array[i]);
                tempArray.push(array[i+1]);
                resultArray.push(tempArray);
            }
            console.log(resultArray)
            this.formatterString = resultArray;
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
        .StringFormatter
            position relative

</style>
