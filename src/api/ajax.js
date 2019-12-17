import axios from 'axios'
import qs from 'qs'
import {Indicator,Toast,MessageBox} from 'mint-ui'
import store from '@/vuex/store'
import router from '@/router'
const instance = axios.create({
  baseURL:'/api',
  timeout:20000
})
instance.interceptors.request.use((config)=>{
  Indicator.open()
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  const token = store.state.token
  if (token) {
    config.headers['Authorization']=token
  }else{
    const needCheck = config.headers.needCheck
    if (needCheck) {
      throw new Error
    }
  }
  return config
})
instance.interceptors.response.use(
  response=>{
    Indicator.close()
    return response.data
  },
  error=>{
    Indicator.close()
    const response = error.response
    if (!response) {
      const path = router.currentRoute.path
      if (path!=='/login') {
        router.replace('/login')
        Toast(error.message)
      }
    }else{
      if (error.response.status===401) {
        const path = router.currentRoute.path
        if (path!=='/login') {
          // console.log('-----------')
          store.dispatch('logout')
          router.replace('/login')
          Toast(error.response.data.message || '登陆失效, 请重新登陆')
        }
      } else if (error.response.status===404) { // status为: 404: 提示访问的资源不存在
        MessageBox('提示', '访问的资源不存在')
      } else {
        // 1. 统一处理请求异常
        MessageBox('提示', '请求出错: ' + error.message)
      }
    }
    //alert('请求出错:'+error.message)
    return new Promise(()=>{})
  }
)
export default instance