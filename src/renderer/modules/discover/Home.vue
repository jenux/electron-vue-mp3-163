<template>
  <div>
    <nav class="top-nav">
      <router-link
        v-for="menu in menus"
        :key="menu.name"
        :to="menu.path"
        :class="{'is-actived': isActivedMenu(menu)}"
      >{{ menu.meta.title }}</router-link>
    </nav>
    <div class="discover">
      <!-- {{ $route.fullPath }} -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { routes as Menus } from './'

export default {
  data () {
    return {

    }
  },
  methods: {
    isActivedMenu (menu) {
      return this.$route.fullPath.includes(menu.path)
    }
  },
  computed: {
    menus () {
      let root = Menus[0];
      return root.children.map(({name, path, meta}) => {
        return {name, path: '/'+root.path+'/'+path, meta}
      })
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="scss">
.discover { 
  .el-carousel__item {
    background: #eee;
    &.is-active {
      background: #ccc;
    }
  }
}
</style>
