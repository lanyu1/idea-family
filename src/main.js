import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//引入iView组件
Vue.use(iView);
//引入图片懒加载
Vue.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
  try: 3 // default 1
})
//css样式引入
import './assets/css/home.css'
import './assets/css/header.css'
import './assets/css/login.css'
import './assets/css/list.css'
import './assets/css/detail.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
