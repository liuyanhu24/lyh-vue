import Vue from 'vue'
import 'lib-flexible'

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'
// 注册全局组件
Vue.component('Header', Header)

new Vue({

  render: h => h(App),
  router,
  store,
}).$mount('#app')