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
      return Menus[0].children.map(({name, path, meta}) => {
        return {name, path, meta}
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
  dl {
    margin: 20px 0;
  }
  dt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .toolbar {
      height: 100%;
      display: flex;
      align-items: center;
      & > * {
        margin-left: 20px;
      }
    }
  }

  dl.tags {
    display: flex;
    margin: 0;
    dt {
      margin-right: 10px;
    }
  }
  
  .inline__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    & > * {
      width: calc((100% - 96px) / 4);
      height: calc((100% - 96px) / 4);
      margin: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
      &:nth-child(2n+1) {
        margin-left: 0
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>
