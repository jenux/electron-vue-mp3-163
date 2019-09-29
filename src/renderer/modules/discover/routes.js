export const routes = [{
  path: 'discover',
  component: () => import(/* webpackChunkName: 'discover' */ './Home'),
  name: 'discover',
  redirect: '/discover/index',
  meta: {
    title: '发现音乐',
    icon: 'el-icon-service'
  },
  children: [
    {
      path: 'index',
      name: 'home',
      component: () => import(/* webpackChunkName: 'recommend' */ '@/views/recommend/index.vue'),
      meta: {
        title: '个性推荐'
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
      path: 'djradio',
      name: 'djradio',
      component: () => import(/* webpackChunkName: 'radio' */ '@/views/djradio/index.vue'),
      meta: {
        title: '主播电台'
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
      path: 'artist',
      name: 'artist',
      component: () => import(/* webpackChunkName: 'artist' */ '@/views/artist/index.vue'),
      redirect: '/discover/artist/home',
      meta: {
        title: '歌手'
      },
      children: [
        {
          path: 'home',
          name: 'artist:home',
          component: () => import(/* webpackChunkName: 'artist-home' */ '@/views/artist/Home.vue'),
          meta: {
            title: '歌手'
          }
        },
        {
          path: 'toplist',
          name: 'artist:toplist',
          component: () => import(/* webpackChunkName: 'artist-toplist' */ '@/views/artist/TopList.vue'),
          meta: {
            title: '歌手榜'
          }
        }
      ]
    },
    {
      path: 'album',
      name: 'album',
      component: () => import(/* webpackChunkName: 'album' */ '@/views/album/index.vue'),
      meta: {
        title: '最新音乐'
      }
    }
  ]
}]
