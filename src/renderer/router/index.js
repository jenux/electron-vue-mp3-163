import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layout/basic/index'

import { routes as discoverRoutes } from '@/modules/discover'
import { routes as myRoutes } from '@/modules/my'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'index',
      component: BasicLayout,
      redirect: '/discover/recommend',
      children: [
        ...discoverRoutes,
        ...myRoutes
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
