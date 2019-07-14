import Vue from 'vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import _ from 'lodash'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false;
Vue.config.performance = true;

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype._ = _;

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

