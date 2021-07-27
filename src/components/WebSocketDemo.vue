<template>
    <div class="root">

    </div>
</template>

<script>
export default {
    name: "UploadDemo",
    data() {
        return {
            fileList: []
        };
    },
    mounted() {
        let websocket;
        let token;
        const onOpen = () => {
            console.log('WebSocket连接成功，状态码：', websocket.readyState)
        };
        const onMessage = (event) => {
            console.log('WebSocket收到消息：', event.data);
        };
        const onError = () => {
            console.log('WebSocket连接错误，状态码：', websocket.readyState)
        };
        const onClose = () => {
            console.log('WebSocket连接关闭，状态码：', websocket.readyState)
        };
        const initWebSocket = () => {
            // 连接成功
            websocket.onopen = onOpen;
            // 收到消息的回调
            websocket.onmessage = onMessage;
            // 连接错误
            websocket.onerror = onError;
            // 连接关闭的回调
            websocket.onclose = onClose;
        };


        if ('WebSocket' in window) {
            token = this.uuid(10);
            // 连接地址：ws://127.0.0.1:8880/ws/xxx
            websocket = new WebSocket("ws:127.0.0.1:8083" + '/ws/' + token);
            initWebSocket()

            // 关闭
            // websocket.close();
        } else {
            alert('当前浏览器 不支持')
        }
    },
    methods: {
        uuid(){
            let radix = 62;
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            const uuid = [];
            radix = radix || chars.length;

            for (let i = 0; i < 10; i++) {
                uuid[i] = chars[0 | Math.random() * radix];
            }
            return uuid.join('');
        }
    }
}
</script>

<style scoped lang="stylus">
.root
    position: relative;
    width 100%
    height 100%

    .UploadDemo
        position relative

</style>
