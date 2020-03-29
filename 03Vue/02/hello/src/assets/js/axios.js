import axios from 'axios'
let myaxios = {}
myaxios.install = function (Vue) {
   Vue.prototype.$axios = axios
}
export default myaxios
