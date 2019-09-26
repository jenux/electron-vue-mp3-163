export const routes = [{
  path: 'my',
  component: () => import(/* webpackChunkName: 'my' */ './Home'),
  name: 'my',
  meta: {
    title: '我的音乐',
    icon: 'el-icon-orange'
  }
}]
