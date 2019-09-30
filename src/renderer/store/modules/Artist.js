import * as api from '@/api/artist'
import _ from 'lodash'
import { Message } from 'element-ui'

const state = {
  catList: [], // 分类
  hotList: [], // 热门歌手
  topList: []  // 歌手榜
}

const mutations = {
  SET_CATLIST (state, payload) {
    state.catList = payload
  },
  SET_HOTLIST (state, payload) {
    state.hotList = payload
  },
  SET_TOPLIST (state, payload) {
    state.topList = payload
  }
}

const actions = {
  // 歌手列表
  getList(ctx, payload) {
    return new Promise((resolve, reject) => {
      api.getList(payload).then(res => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },
  // 歌手分类 
  getCatList ({commit}) {
    return new Promise((resolve, reject) => {
      api.getCatList().then(res => {
        if (res.code === 200) {
          commit('SET_CATLIST', res.categories)
          resolve(res.categories)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },
  // 热门歌手
  getHotList ({commit}) {
    return new Promise((resolve, reject) => {
      api.getHotList().then(res => {
        if (res.code === 200) {
          commit('SET_HOTList', res.tags.map(x => x.playlistTag))
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },
  // 歌手榜
  getTopList ({commit}) {
    return new Promise((resolve, reject) => {
      api.getTopList().then(res => {
        if (res.code === 200) {
          commit('SET_TOPLIST', res.list.artists)
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },

  // 歌手主页
  getArtist (ctx, payload) {
    return new Promise((resolve, reject) => {
      api.getArtist(payload).then(res => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },

  // 歌手专辑
  getArtistAlbum (ctx, payload) {
    return new Promise((resolve, reject) => {
      api.getArtistAlbum(payload).then(res => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },
  // 歌手MV
  getArtistMV (ctx, payload) {
    return new Promise((resolve, reject) => {
      api.getArtistMV(payload).then(res => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },
  // 歌手描述
  getArtistDesc (ctx, payload) {
    return new Promise((resolve, reject) => {
      api.getArtistDesc(payload).then(res => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },

  // 相似歌手
  getArtistSimi (ctx, payload) {
    return new Promise((resolve, reject) => {
      api.getArtistSimi(payload).then(res => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
