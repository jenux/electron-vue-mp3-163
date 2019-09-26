import { routes as discoverRoutes } from './discover'
import { routes as myRoutes } from './my'

let modules = ([...discoverRoutes, ...myRoutes]).map(({name, path, meta}) => {
  return {name, path: '/'+path, meta}
})

modules.push({
  name: 'friend,',
  path: 'friends',
  meta: {
    title: '朋友',
    icon: 'el-icon-user'
  }
})

export default modules
