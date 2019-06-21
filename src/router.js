import Vue from 'vue'
import Router from 'vue-router'

import Layout from './layout/Layout.vue'
import Login from './pages/user/Login.vue'
import Register from './pages/user/Register.vue'
import Container from './container/Container.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/user',
            component: Layout,
            children:[
                {
                    path: '/user/login',
                    component: Login
                },
                {
                    path: '/user/register',
                    component: Register
                }
            ]
        },
        {
            path:'/',
            component: Container,
            children:[
                {
                    path:'/',
                    redirect:'/user/login'
                }
            ]
        }
    ]
})