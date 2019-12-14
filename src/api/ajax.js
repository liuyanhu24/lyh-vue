import axios from 'axios'
import qs from 'qs'
import { Promise } from 'q'
const instance = axios.create({
  baseURL:'/api',
  timeout:20000
})
instance.interceptors.request.use((config)=>{
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})
instance.interceptors.response.use(
  response=>{
    return response.data
  },
  error=>{
    alert('请求出错:'+error.message)
    return new Promise(()=>{})
  }
)
export default instance