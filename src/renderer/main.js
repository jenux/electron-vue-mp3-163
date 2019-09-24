import Vue from 'vue'
import VueConfig from 'vue-config'
import configs from './config'
Vue.use(VueConfig, configs)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'

import './styles/index.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
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

