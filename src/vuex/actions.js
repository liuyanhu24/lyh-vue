import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqAutoLogin
  
} from '@/api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RECEIVE_TOKEN,
  RESET_USER,
  RESET_TOKEN

} from './mutation-types'

export default {
  async getAddress({commit,state}){
    const {longitude,latitude}=state
    const result = await reqAddress(longitude,latitude)
    if (result.code===0) {
      const address=result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  async getCategorys({commit},callback){
    const result = await reqCategorys()
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,categorys)
      typeof callback === 'function' && callback()
    }
  },
  async getShops ({commit,state}){
    const {longitude,latitude}=state
    const result = await reqShops({longitude,latitude})
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },
  saveUser({commit},user){
    const token = user.token
    localStorage.setItem('token_key',token)
    delete user.token
    commit(RECEIVE_USER,{user})
    commit(RECEIVE_TOKEN,{token})
  },
  // 自动登录异步action
  async autoLogin({commit,state}){
    if (state.token && !state.user._id) { // 必须要有token且没有user信息
      // 发送自动登陆的请求
      const result = await reqAutoLogin()
      if (result.code===0) {
        const user = result.data  // 没有token
        commit(RECEIVE_USER, {user})
      }
    }
  },
  logout ({commit}) {
    localStorage.removeItem('token_key')
    commit(RESET_USER)
    commit(RESET_TOKEN)
  }
}