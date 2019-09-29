import $http from './http'

// 歌单列表
export function getList ({
  cat = '全部',
  limit = 10,
  offset = 0,
  order = 'new'
}) {
  return $http.get('/top/playlist', {
    params: {
      cat,
      limit,
      offset,
      order
    }
  })
}

// 精品歌单
export function getTopList({
  cat = '全部',
  limit = 1
}) {
  return $http.get('/top/playlist/highquality', {
    params: {
      cat,
      limit
    }
  })
}

// 歌单分类
export function getCatList () {
  return $http.get('/playlist/catlist')
}

// 歌单热门分类
export function getHotCatList () {
  return $http.get('/playlist/hot')
}
