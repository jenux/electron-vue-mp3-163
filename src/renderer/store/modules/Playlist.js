import * as api from '@/api/playlist'
import _ from 'lodash'
import { Message } from 'element-ui'

const state = {
  catList: [],
  hotCatList: []
}

const mutations = {
  SET_CATLIST (state, payload) {
    state.catList = payload
  },
  SET_HOTCATLIST (state, payload) {
    state.hotCatList = payload
  }
}

const actions = {
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
  getHotCatList ({commit}) {
    return new Promise((resolve, reject) => {
      api.getHotCatList().then(res => {
        if (res.code === 200) {
          let data = res.tags.map(x => x.playlistTag)
          commit('SET_HOTCATLIST', data)
          resolve(data)
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
