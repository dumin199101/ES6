import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
