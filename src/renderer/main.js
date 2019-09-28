import Vue from 'vue'
import VueConfig from 'vue-config'
import AppConfig from './config'
Vue.use(VueConfig, AppConfig)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: '../static/images/default_album.jpg'
})

import App from './App'
import router from './router'
import store from './store'

import './styles/index.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

// Fake welcome screen
const welcome = document.getElementById('welcome')
const welcomeImg = welcome.querySelector('img');

setTimeout(() => {
  welcomeImg.classList.add('fade')
}, 1000)
welcomeImg.addEventListener('webkitAnimationEnd', () => {
  Vue.nextTick(() => {
    document.body.removeChild(welcome)
  })
})

