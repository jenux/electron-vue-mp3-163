import $http from './http'

const categories = [
  {
    name: '男歌手',
    tags: [
      { label: '华语男歌手', value: 1001},
      { label: '欧美男歌手', value: 2001},
      { label: '日本男歌手', value: 6001},
      { label: '韩国男歌手', value: 7001},
      { label: '其他男歌手', value: 4001}
    ]
  },
  {
    name: '女歌手',
    tags: [
      { label: '华语女歌手', value: 1002},
      { label: '欧美女歌手', value: 2002},
      { label: '日本女歌手', value: 6002},
      { label: '韩国女歌手', value: 7002},
      { label: '其他女歌手', value: 4002}
    ]
  },
  {
    name: '组合/乐队',
    tags: [
      { label: '华语组合/乐队', value: 1003},
      { label: '欧美组合/乐队', value: 2003},
      { label: '日本组合/乐队', value: 6003},
      { label: '韩国组合/乐队', value: 7003},
      { label: '其他组合/乐队', value: 4003}
    ]
  },
  {
    name: '其他歌手',
    tags: [
      { label: '入驻歌手', value: 5001}
    ]
  }
]

// 歌手列表
export function getList ({
  cat = '1001',
  initial = '',
  limit = 20,
  offset = 0
}) {
  return $http.get('/artist/list', {
    params: {
      cat,
      initial,
      limit,
      offset
    }
  })
}

// 热门歌手
export function getHotList({
  offset = 0,
  limit = 20
}) {
  return $http.get('/top/artists', {
    params: {
      offset,
      limit
    }
  })
}

// 歌手榜
export function getTopList() {
  return $http.get('/toplist/artist')
}

// 歌手分类
export function getCatList () {
  // return $http.get('/playlist/catlist')
  return new Promise((resolve) => {
    resolve({
      code: 200,
      categories
    })
  })
}
