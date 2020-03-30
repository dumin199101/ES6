import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import User from '@/components/User/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:'/user',name:'User',component:User}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
