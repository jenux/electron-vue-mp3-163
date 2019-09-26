import request from './request'
import axios from 'axios'

export function getTopPlaylist ({
  cat = '全部',
  limit = 10,
  offset = 0,
  order = 'new'
}) {
  axios.get('http://localhost:3000/top/playlist', {
    params: {
      cat,
      limit,
      offset,
      order
    }
  }).then(res => {
    console.info('####', res)
    return res
  })
}
