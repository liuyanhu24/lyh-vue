import Vue from 'vue'
import 'lib-flexible'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import store from './vuex/store'
import './validate'
import * as API from '@/api'
import './mock/mock-server'
import i18n from './i18n'
import loading from '@/common/images/loading.gif'
Vue.use(VueLazyload,{
  loading
})
Vue.prototype.$API = API
// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star',Star)
Vue.component('CartControl', CartControl)
Vue.component(Button.name, Button)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')