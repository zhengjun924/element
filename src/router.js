import Vue from 'vue'
import Router from 'vue-router'
import Layout from './layout/Layout.vue'
import Login from './pages/user/Login.vue'
import Register from './pages/user/Register.vue'
import Forgot from './pages/user/Forgot.vue'
import Container from './container/Container.vue'
import Welcome from './pages/Welcome.vue'
import Barea from './pages/Barea.vue'



Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[
        {
            path:'/user',
            redirect:'/user/login',
            component: Layout,
            children:[
                {
                    path: '/user/login',
                    name:'登录',
                    component: Login,
                },
                {
                    path: '/user/register',
                    name: '注册',
                    component: Register
                },
                {
                    path:'/user/forgot',
                    name: '忘记密码',
                    component:Forgot
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
                },
                {
                    path:'/login',
                    redirect:'/user/login'
                },
                {
                    path:'/welcome',
                    component:Welcome,
                    meta:{
                        title:'欢迎'
                    }
                },
                {
                    path: '/bArea',
                    component: Barea,
                    meta: {
                        title: 'B域'
                    }
                }
            ]
        }
    ]
})
router.beforeEach((to, from, next) => {
    // 根据路由元信息设置文档标题
    window.document.title = to.meta.title || 'element'
    next()
})
export default router;