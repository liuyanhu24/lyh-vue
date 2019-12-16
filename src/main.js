import Vue from 'vue'
import 'lib-flexible'

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './vuex/store'
import './validate'
import * as API from '@/api'
Vue.prototype.$API = API
// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star',Star)
new Vue({

  render: h => h(App),
  router,
  store,
}).$mount('#app')