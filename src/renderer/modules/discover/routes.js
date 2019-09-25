export const routes = [{
  path: 'discover',
  component: () => import(/* webpackChunkName: 'discover' */ './Home'),
  name: 'discover',
  redirect: '/discover/rank',
  meta: {
    title: '发现音乐',
    icon: 'music'
  },
  children: [
    {
      path: 'recommend',
      name: 'recommend',
      component: () => import(/* webpackChunkName: 'recommend' */ '@/views/recommend/index.vue'),
      meta: {
        title: '推荐'
      }
    },
    {
      path: 'toplist',
      name: 'toplist',
      component: () => import(/* webpackChunkName: 'toplist' */ '@/views/toplist/index.vue'),
      meta: {
        title: '排行榜'
      }
    },
    {
      path: 'playlist',
      name: 'playlist',
      component: () => import(/* webpackChunkName: 'playlist' */ '@/views/playlist/index.vue'),
      meta: {
        title: '歌单'
      }
    },
    {
      path: 'radio',
      name: 'radio',
      component: () => import(/* webpackChunkName: 'radio' */ '@/views/radio/index.vue'),
      meta: {
        title: '主播电台'
      }
    },
    {
      path: 'artist',
      name: 'artist',
      component: () => import(/* webpackChunkName: 'artist' */ '@/views/artist/index.vue'),
      meta: {
        title: '歌手'
      }
    },
    {
      path: 'album',
      name: 'album',
      component: () => import(/* webpackChunkName: 'album' */ '@/views/album/index.vue'),
      meta: {
        title: '新碟上架'
      }
    }
  ]
}]
