import $http from './http'

export function getTopList ({
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

export function getHighQuality({
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

export function getCatList () {
  return $http.get('/playlist/catlist')
}

export function getHotCats () {
  return $http.get('/playlist/hot')
}
