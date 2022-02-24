import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../Layout/index";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Layout
    },
    {
        path:'/',
        component: Layout,
        children:[
            {
                path:'profile',
                component:()=>import('../views/Profile/index'),
                name:'profile'
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
