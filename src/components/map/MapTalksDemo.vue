<template>
    <div id="map" class="container">

    </div>
</template>

<script>
import * as maptalks from 'maptalks';
export default {
    name: 'MapTalksDemo',
    mounted() {
        const map = new maptalks.Map('map', {
            center: [113.27,23.13],
            zoom: 14,
            baseLayer: new maptalks.TileLayer('base', {
                urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                subdomains: ['a','b','c','d'],
                attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
            })
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .container
        width 100%
        height 100%
</style>
