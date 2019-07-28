import Vue from 'vue';
import router from './router';
import axios from 'axios';
import qs from 'qs';
import _ from 'lodash';
import VueLazyload from 'vue-lazyload';
import VueVideoPlayer from 'vue-video-player';
import layer from 'vue-layer';
import ElementUI from 'element-ui';
import './plugins/element.js';
import 'element-ui/lib/theme-chalk/index.css';
import 'video.js/dist/video-js.css';
import 'vue-layer/lib/vue-layer.css';
import 'normalize.css';
import App from './App.vue';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype._ = _;
Vue.prototype.$layer = layer(Vue);

Vue.use(ElementUI);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '@/assets/carousel/error.jpg',
  loading: '@/assets/carousel/loading.gif',
  attempt: 1
});
Vue.use(VueVideoPlayer);

router.beforeEach((to, from, next) => {
  // 根据路由元信息设置文档标题
  window.document.title = '冷毅-' + to.meta.title || 'element';
  const token = window.sessionStorage.getItem('token');

  if (to.matched.some(record => record.meta.requireAuth)) {
    next()//如果路由中有meta的requireAuth，且为true，就不进行登录验证，否则进行登录验证
  } else {
    if (!token) {
      confirm('请先登录');
      next({ path: '/user/login' });

    } else {
      next()
    }
  }
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


