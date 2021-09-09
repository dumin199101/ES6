import Vue from 'vue'
import VueRouter from 'vue-router'
/*
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import Login from '@/components/Login.vue'
*/

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: "/", redirect: "/home"},
        {path: "/home", component: ()=>import(/* webpackChunkName:"Home" */ '@/components/Home.vue')},
        {path: "/login", component: ()=>import(/* webpackChunkName:"Login" */ '@/components/Login.vue')},
        {path: "/movie/:id", component: ()=>import(/* webpackChunkName:"Movie" */ '@/components/Movie.vue'), props: true},
        {
            path: "/about",
            component: ()=>import(/* webpackChunkName:"About" */ '@/components/About.vue'),
            redirect: "/about/tab1",
            children: [
                {path: "tab1", component:()=>import(/* webpackChunkName:"Tab1" */ '@/components/tabs/Tab1.vue')},
                {path: "tab2", component: ()=>import(/* webpackChunkName:"Tab2" */ '@/components/tabs/Tab2.vue')}
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/home') {
        const token = localStorage.getItem("token")
        if (token) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router

