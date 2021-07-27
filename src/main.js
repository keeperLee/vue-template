import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import * as echarts from 'echarts'
import SlideVerify from 'vue-monoplasty-slide-verify'
import _ from 'lodash'
Vue.use(ElementUI)
Vue.use(SlideVerify)
Vue.prototype.$axios = Axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
