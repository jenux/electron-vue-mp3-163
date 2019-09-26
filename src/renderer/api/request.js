import axios from 'axios'
import { Message } from 'element-ui'

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'http://39.105.232.6:3000'

const request = axios.create ({
  baseURL,
  timeout: 30000,
  withCredentials: true
})

request.interceptors.request.use(config => {
  // config.headers['sra'] = 'sra'
  // config.headers['X-Real-IP'] = '211.161.244.70'
  return config
}, error => {
  Message.error({message: `请求超时! ${error}`})
  return Promise.resolve(error)
})

request.interceptors.response.use(response => {

})

export default request
