import Vue from 'vue'
import Router from 'vue-router'
import Layout from './layout/Layout.vue'
import Login from '@/pages/user/Login.vue'
import Register from '@/pages/user/Register.vue'
import Forgot from '@/pages/user/Forgot.vue'
import Container from './container/Container.vue'
import Welcome from '@/pages/Welcome.vue'
import Barea from '@/pages/Barea.vue'



Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "*",
            redirect: '/welcome'
        },
        {
            path: '/user',
            redirect: '/user/login',
            component: Layout,
            children: [
                {
                    path: '/user/login',
                    name: 'login',
                    component: Login,
                    meta: {
                        title: '登录',
                        requireAuth:true,
                    }
                },
                {
                    path: '/user/register',
                    name: 'register',
                    component: Register,
                    meta: {
                        title: '注册',
                        requireAuth: true,
                    }
                },
                {
                    path: '/user/forgot',
                    name: 'forgot',
                    component: Forgot,
                    meta: {
                        title: '忘记密码',
                        requireAuth: true,
                    }
                }
            ]
        },
        {
            path: '/',
            redirect: '/user/login',
            component: Container,
            children: [
                {
                    path: '/login',
                    redirect: '/user/login'
                },
                {
                    path: '/welcome',
                    name: 'welcome',
                    component: Welcome,
                    meta: {
                        title: '欢迎',
                        keepAlive: true
                    }
                },
                {
                    path: '/bArea',
                    name: 'bArea',
                    component: Barea,
                    meta: {
                        title: 'B域'
                    }
                }
            ]
        }
    ]
})

export default router;