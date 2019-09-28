import Vue from 'vue'
import axios from 'axios'
// import Qs from 'qs'
import { Loading, Message } from 'element-ui'

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'http://39.105.232.6:3000'

const $axios = axios.create ({
  baseURL,
  timeout: 30000,
  withCredentials: true
})
$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
Vue.prototype.$http = axios

let loading = null

$axios.interceptors.request.use(config => {
  // loading = Loading.service({text: '加载中...'})
  
  // config.headers['sra'] = 'sra'
  // config.headers['X-Real-IP'] = '211.161.244.70'
  /*if (config.method.toLowerCase() === 'post') {
    let data = config.data;
    if (data) {
      config.data = Qs.stringify(data)
    }
  }
  const token = store.getters.token
  if (token) {
    config.headers.Authorization = token // 请求头部添加token
  }*/
  return config
}, error => {
  Message.error({message: `请求超时! ${error}`})
  return Promise.resolve(error)
})

$axios.interceptors.response.use(response => {
  if (loading) {
    // loading.close()
  }
  const code = response.status
  if ((code >= 200 && code < 300) || code === 304) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response)
  }
}, error => {
  if (loading) {
    loading.close()
  }
  console.error(error)
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回401 清除token信息并跳转到登陆页面
        // store.commit('DEL_TOKEN')
        // router.replace({
        //   path: '/login',
        //   query: {
        //     redirect: router.currentRoute.fullPath
        //   }
        // })
        break
      case 404:
        // Message.error('网络请求不存在')
        break
      default:
        // Message.error(error.response.data.message)
    }
  } else {
    // 请求超时或者网络有问题
    if (error.message.includes('timeout')) {
      Message.error('请求超时！请检查网络是否正常')
    } else {
      Message.error('请求超时！请检查网络是否正常')
    }
  }
  return Promise.reject(error)
})

export default $axios
