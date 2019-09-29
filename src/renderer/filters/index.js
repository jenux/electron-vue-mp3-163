/**
 * The file enables `@/filters/index.js` to import all filters
 */

const files = require.context('.', false, /\.js$/)

export default {
  install(Vue) {
    files.keys().forEach(key => {
      if (key === './index.js') return
      Vue.filter(key.replace(/(\.\/|\.js)/g, ''), files(key).default)
    })
  }
}
