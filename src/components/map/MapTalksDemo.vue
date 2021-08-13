<template>
    <div id="map" class="container">

    </div>
</template>

<script>
import * as maptalks from 'maptalks';

export default {
    name: 'MapTalksDemo',
    mounted() {
        // this.drawBaseMap();
        this.drawBaseMapArea();
    },
    methods: {
        //创建基层地图
        drawBaseMap() {
            const map = new maptalks.Map('map', {
                center: [113.27, 23.13],
                zoom: 16, //放大倍数
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a', 'b', 'c', 'd'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                })
            });
        },
        //限制地图区域,框选区域
        drawBaseMapArea() {
            const map = new maptalks.Map('map', {
                center: [113.27, 23.13],
                centerCross : true,//展示屏幕中心的准心
                zoom: 16, //放大倍数
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a', 'b', 'c', 'd'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                }),
                layers: [
                    new maptalks.VectorLayer('v')
                ]
            });

            var extent = map.getExtent();
            // console.log(extent,'extent');
            // console.log(extent.toArray(),'extent.toArray()');

            // set map's max extent to map's extent at zoom 14
            map.setMaxExtent(extent);

            map.setZoom(map.getZoom() - 2, {animation: true});

            map.getLayer('v')
                    .addGeometry(
                            new maptalks.Polygon(extent.toArray(), {
                                symbol: {'polygonOpacity': 1, 'lineWidth': 2}
                            })
                    );
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.container
    width 100%
    height 100%
</style>
