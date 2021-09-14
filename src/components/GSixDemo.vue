<template>
    <div class="root">
        <div id="gsix"></div>
    </div>
</template>

<script>
export default {
    name: "GSixDemo",
    data() {
        return {
            fileList: []
        };
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            const data = {
                // 点集
                nodes: [
                    {
                        id: 'node1',
                        x: 100,
                        y: 200,
                    },
                    {
                        id: 'node2',
                        x: 300,
                        y: 200,
                    },
                ],
                // 边集
                edges: [
                    // 表示一条从 node1 节点连接到 node2 节点的边
                    {
                        source: 'node1',
                        target: 'node2',
                    },
                ],
            };
            const graph =  new this.$g6.Graph({
                container: 'gsix', // 指定图画布的容器 id，与第 9 行的容器对应
                // 画布宽高
                width: 800,
                height: 500,
            });
            // 读取数据
            graph.data(data);
            // 渲染图
            graph.render();
        }
    }
}
</script>

<style lang="stylus" scoped>
.root
    position: relative;
    width 100%
    height 100%

    .UploadDemo
        position relative

</style>
