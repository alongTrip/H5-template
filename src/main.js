import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index' // lib-flexible 用于设置 rem 基准值
import Vconsole from 'vconsole'
const vConsole = new Vconsole()
Vue.use(vConsole)
// import { Button } from 'vant' // 引入vant组件
// Vue.use(Button)

Vue.config.productionTip = false

// Vue.prototype.$echarts = echarts // 将echarts绑定到vue实例

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
