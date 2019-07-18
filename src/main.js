import Vue from 'vue';
import router from './router';
import axios from 'axios';
import qs from 'qs';
import _ from 'lodash';
import VueLazyload from 'vue-lazyload';
import ElementUI from 'element-ui';
import './plugins/element.js';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype._ = _;

Vue.use(ElementUI);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '@/assets/error.jpg',
  loading: '@/assets/loading.gif',
  attempt: 1
});

router.beforeEach((to, from, next) => {
  // 根据路由元信息设置文档标题
  window.document.title = '冷毅-' + to.meta.title || 'element';
  const token = window.sessionStorage.getItem('token');

  if (to.matched.some(record => record.meta.requireAuth)) {
    next()//如果路由中有meta的requireAuth，且为true，就不进行登录验证，否则进行登录验证
  } else {
    if (!token) {
      next({ path: '/user/login' })
    } else {
      next()
    }
  }
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


