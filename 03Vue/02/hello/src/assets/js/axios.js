import axios from 'axios'
let myaxios = {}
myaxios.install = function (Vue) {
   //自定义axios
   var instance = axios.create({
     baseURL: 'http://localhost:8888/api/private/v1/',
     headers: {'Authorization': window.localStorage.getItem('token')}
   });
   Vue.prototype.$axios = instance;
}
export default myaxios
