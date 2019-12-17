import Vue from 'vue'
import 'lib-flexible'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './vuex/store'
import './validate'
import * as API from '@/api'
import './mock/mock-server'
import i18n from './i18n'
Vue.prototype.$API = API
// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star',Star)
Vue.component(Button.name, Button)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')