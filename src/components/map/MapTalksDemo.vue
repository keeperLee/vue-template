<template>
    <div class="root">
        <div id="map" class="container">

        </div>
<!--        <div id="info"></div>-->
    </div>

</template>

<script>
import * as maptalks from 'maptalks';

export default {
    name: 'MapTalksDemo',
    mounted() {
        // this.drawBaseMap();
        // this.drawBaseMapArea();
        // this.preventZoom();
        // this.mapEventListener();
        this.addMarker();
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
                centerCross: true,//展示屏幕中心的准心
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

            const extent = map.getExtent();
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
        },
        //禁止缩放
        preventZoom() {
            const map = new maptalks.Map('map', {
                center: [-0.113049, 51.498568],
                zoom: 14,
                minZoom: 14, // set map's min zoom to 14
                maxZoom: 14, // set map's max zoom to 14
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a', 'b', 'c', 'd'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                })
            });

            // or you can set zoom limit by
            map.setMinZoom(14).setMaxZoom(14);
        },
        //地图事件监听
        mapEventListener() {
            const map = new maptalks.Map('map', {
                center: [113.27, 23.13],
                zoom: 14,
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a', 'b', 'c', 'd'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                })
            });

            map.on('click', function (param) {
                const infoDom = document.getElementById('info');
                console.log(infoDom)
                console.log(param);
                infoDom.innerHTML = '<div>' + new Date().toLocaleTimeString() +
                        ': click map on ' + param.coordinate.toFixed(5).toArray().join() + '</div>' +
                        infoDom.innerHTML;
            });
        },
       //地图标点
        addMarker(){
            const map = new maptalks.Map('map', {
                center: [-0.113049, 51.498568],
                zoom: 14,
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a','b','c','d'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                })
            });

            const point = new maptalks.Marker(
                    [-0.113049, 51.498568],
                    {
                        visible : true,
                        editable : true,
                        cursor : 'pointer',
                        shadowBlur : 0,
                        shadowColor : 'black',
                        draggable : false,
                        dragShadow : true, // display a shadow during dragging
                        drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
                        symbol : {
                            'textFaceName' : 'sans-serif',
                            'textName' : '李健',
                            'textFill' : '#34495e',
                            'textHorizontalAlignment' : 'right',
                            'textSize' : 40
                        }
                    }
            );

            new maptalks.VectorLayer('vector', point).addTo(map);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.root
    width 100%
    height 100%

    .container
        width 100%
        height 100%

    #info {
        position: fixed;
        background-color: rgba(13, 13, 13, 0.5);
        padding: 10px 10px 10px 10px;
        font: 13px bold sans-serif;
        color: #fff;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 140px;
        overflow: hidden
    }
</style>
