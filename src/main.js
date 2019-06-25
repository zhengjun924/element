import Vue from 'vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
