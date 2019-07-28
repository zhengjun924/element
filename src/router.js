import Vue from 'vue'
import Router from 'vue-router'

import Layout from './layout/Layout.vue'
import Login from '@/pages/User/Login.vue'
import Register from '@/pages/User/Register.vue'
import Forgot from '@/pages/User/Forgot.vue'

import Container from './container/Container.vue'
import Welcome from '@/pages/Welcome.vue'
import Barea from '@/pages/Barea.vue'
import ComingSoon from '@/pages/DouBan/ComingSoon'
import InTheaters from '@/pages/DouBan/InTheaters'
import Top250 from '@/pages/DouBan/Top250'

import MusicList from '@/pages/KuGou/MusicList'



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
                        requireAuth: true,
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
                },
                {
                    path: '/douBan/comingSoon',
                    name: 'comingSoon',
                    component: ComingSoon,
                    meta: {
                        title: '即将上映'
                    }
                },
                {
                    path: '/douBan/inTheaters',
                    name: 'inTheaters',
                    component: InTheaters,
                    meta: {
                        title: '正在热映'
                    }
                },
                {
                    path: '/douBan/top250',
                    name: 'top250',
                    component: Top250,
                    meta: {
                        title: 'top250'
                    }
                },
                {
                    path: '/kuGou/musicList',
                    name: 'musicList',
                    component: MusicList,
                    meta: {
                        title: '音乐排行榜'
                    }
                },
            ]
        }
    ]
})

export default router;