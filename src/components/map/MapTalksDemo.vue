<template>
    <div class="root">
        <div id="map" class="container">

        </div>
        <div id="info">{{extent}}</div>
    </div>

</template>

<script>
import * as maptalks from 'maptalks';

export default {
    name: 'MapTalksDemo',
    data(){
        return {
            extent:null
        }
    },
    mounted() {
        // this.drawBaseMap();
        // this.drawBaseMapArea();
        // this.preventZoom();
        // this.mapEventListener();
        this.addMarker();
        // this.addLine();
        // this.addPolygon();
        // this.addGeometryCollection();
        // this.flashItem();
    },
    methods: {
        //创建基层地图
        drawBaseMap() {
            const map = new maptalks.Map('map', {
                center: [113.27, 23.13],
                zoom: 16, //放大倍数 ,数值越大，地标越清晰
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
                center: [114.27, 23.13],
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
            console.log(extent,'extent');
            console.log(extent.toArray(),'extent.toArray()');
            this.extent = extent;
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
                        draggable : true,
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
        },
        //地图线条
        addLine(){
            const map = new maptalks.Map('map', {
                center: [-0.113049, 51.498568],
                zoom: 14,
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a','b','c','d'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                })
            });

            const line = new maptalks.LineString([
                [-0.131049, 51.498568],
                [-0.107049, 51.498568]
            ], {
                arrowStyle : null, // arrow-style : now we only have classic
                arrowPlacement : 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
                visible : true,
                editable : true,
                cursor : null,
                shadowBlur : 0,
                shadowColor : 'black',
                draggable : false,
                dragShadow : false, // display a shadow during dragging
                drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
                symbol: {
                    'lineColor' : '#1bbc9b',
                    'lineWidth' : 3
                }
            });

            new maptalks.VectorLayer('vector', line).addTo(map);
        },
        //绘制多边形
        addPolygon(){
            const map = new maptalks.Map('map', {
                center: [-0.113049, 51.498568],
                zoom: 14,
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a','b','c','d'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                })
            });

            const polygon = new maptalks.Polygon([
                [
                    [-0.131049, 51.498568],
                    [-0.107049, 51.498568],
                    [-0.107049, 51.493568],
                    [-0.131049, 51.493568],
                    [-0.131049, 51.498568]
                ]
            ], {
                visible : true,
                editable : true,
                cursor : 'pointer',
                shadowBlur : 0,
                shadowColor : 'black',
                draggable : false,
                dragShadow : false, // display a shadow during dragging
                drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
                symbol: {
                    'lineColor' : '#34495e',
                    'lineWidth' : 2,
                    'polygonFill' : 'rgb(135,196,240)',
                    'polygonOpacity' : 0.6
                }
            });

            new maptalks.VectorLayer('vector', polygon).addTo(map);
        },
        addGeometryCollection(){
            const c = new maptalks.Coordinate(-0.113049,51.498568);
            const map = new maptalks.Map('map', {
                center: c,
                zoom: 14,
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a','b','c','d'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                })
            });

            const marker = new maptalks.Marker(c.add(-0.018,0.007), {
                symbol : {
                    'textFaceName' : 'sans-serif',
                    'textName' : 'MapTalks',
                    'textFill' : '#34495e',
                    'textHorizontalAlignment' : 'right',
                    'textSize' : 40
                }
            });
            const line = new maptalks.LineString([
                c.add(-0.018,0.005),
                c.add(0.006,0.005)
            ], {
                symbol: {
                    'lineColor' : '#1bbc9b',
                    'lineWidth' : 3
                }
            });
            const polygon = new maptalks.Polygon([
                c.add(-0.018,0.004),
                c.add(0.006,0.004),
                c.add(0.006,-0.001),
                c.add(-0.018,-0.001),
                c.add(-0.018,0.004)
            ], {
                symbol: {
                    'lineColor' : '#34495e',
                    'lineWidth' : 2,
                    'polygonFill' : 'rgb(135,196,240)',
                    'polygonOpacity' : 0.6
                }
            });

            const collection = new maptalks.GeometryCollection([marker, line, polygon]);

            new maptalks.VectorLayer('vector', collection)
                    .addTo(map);
        },
        //闪动图标
        flashItem(){
            const map = new maptalks.Map('map', {
                center: [-0.113049,51.498568],
                zoom: 14,
                baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    subdomains: ['a','b','c','d'],
                    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
                })
            });

            const marker = new maptalks.Marker(
                    map.getCenter(),
                    {
                        symbol : {
                            'textFaceName' : 'sans-serif',
                            'textName' : 'FLASH\nME',
                            'textFill' : '#34495e',
                            'textSize' : 40,
                            'textHaloColor' : 'white',
                            'textHaloRadius' : 8
                        }
                    }
            );

            new maptalks.VectorLayer('vector', marker).addTo(map);
                // new maptalks.ImageLayer("images", [{
                //     url : 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
                //     extent: [100, 10, 120, 20],
                //     opacity : 1
                // }]).addTo(map);
            marker.flash(
                    500,  //flash interval in ms
                    10,    // count
                    function () { // callback when flash end
                        alert('flash ended');
                    });

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
