<template>
  <div class="side-pane">
    <div class="header">
      <h1><router-link to="/">{{ $config.title }}</router-link></h1>
    </div>

    <div class="user" style="padding: 10px">
      <el-button icon="el-icon-user" circle></el-button>
      未登录 >
    </div>
    
    <nav>
      <ul>
        <li 
          v-for="menu in menus" 
          :key="menu.name"
          :class="{'is-actived': isActivedMenu(menu)}">
          <router-link :to="menu.path">
            <i :class="menu.meta.icon" />
            {{ menu.meta.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <dl>
      <dt>我的音乐</dt>
      <dd>
        <nav>
          <ul>
            <li>
              <router-link to="/">
                <i class="el-icon-help" />
                iTunes音乐
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <i class="el-icon-bottom" />
                下载管理
              </router-link>
            </li>
          </ul>
        </nav>
      </dd>
    </dl>
  </div>
</template>

<script>
import Menus from '../../modules'

export default {
  name: 'side-pane',
  data () {
    return {
      menus: Menus
    }
  },
  methods: {
    isActivedMenu (menu) {
      return this.$route.fullPath.includes(menu.path)
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="scss">
  $side_hl: #d33f37;
  $side_hl_bg: #e2e2e2;
  .side-pane {
    h1 {
      padding: 10px;
      overflow: hidden;
      a {
        display: block;
        height: 100%;
        background: url(/static/images/logo.svg) no-repeat;
        background-size: contain;
        text-indent: -999em;
      }
    }
    li {
      a {
        display: block;
        padding: 8px 12px;
        color: inherit;
        &:hover {
          background: $side_hl_bg;
        }
      }
      &.is-actived a {
        background: $side_hl_bg;
        color: $side_hl;
      }
    }
    dt {
      margin-top: 10px;
      padding: 0 12px;
      font-size: 80%;
      color: #999;
    }
  }
</style>
