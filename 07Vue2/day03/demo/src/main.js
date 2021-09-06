import Vue from 'vue'
import App from './App.vue'
import Count from '@/components/Count.vue'
import axios from 'axios'

Vue.component('MyCount',Count)

// Vue.directive('color',function(el,binding){
//   el.style.color = binding.value;
// })

axios.defaults.baseURL = 'http://localhost:8080'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
