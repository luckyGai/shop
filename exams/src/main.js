// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//导入vue-resource
import VueResource from 'vue-resource';


//引入vant-ui
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import axios from './utils/request';
//vue的原型中
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueResource);
//Vue.use(axios);

//全局路由守卫

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
