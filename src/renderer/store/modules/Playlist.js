import * as api from '@/api/playlist'
import _ from 'lodash'
import { Message } from 'element-ui'

const state = {
  topList: [],
  catList: [],
  hotCats: []
}

const mutations = {
  SET_TOPLIST (state, payload) {
    state.topList = payload
  },
  ADD_TOPLIST (state, payload) {
    state.topList = [...state.topList, ...payload]
  },
  SET_CATLIST (state, payload) {
    state.catList = payload
  },
  SET_HOTCATS (state, payload) {
    state.hotCats = payload
  }
}

const actions = {
  getTopList(ctx, payload) {
    return new Promise((resolve, reject) => {
      api.getTopList(payload).then(res => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },
  getHighQuality(ctx, payload) {
    return new Promise((resolve, reject) => {
      api.getHighQuality(payload).then(res => {
        if (res.code === 200) {
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },
  getCatList ({commit}) {
    return new Promise((resolve, reject) => {
      api.getCatList().then(res => {
        if (res.code === 200) {
          let data = [
            {
              label: res.all.name,
              name: '全部'
            }
          ]
          data = _.groupBy(res.sub, 'category')
          res.data = _.toArray(data)
          commit('SET_CATLIST', res)
          resolve(res)
        } else {
          reject(res)
          Message.error('Error: ', res)
        }
      })
    })
  },
  getHotCats ({commit}) {
    return new Promise((resolve, reject) => {
      api.getHotCats().then(res => {
        if (res.code === 200) {
          commit('SET_HOTCATS', res.tags.map(x => x.playlistTag))
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
