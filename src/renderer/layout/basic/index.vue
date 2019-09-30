<template>
  <div class="basic-layout">
    <el-container>
      <el-container>
        <el-aside class="basic-layout__side">
          <side-pane></side-pane>
        </el-aside>
        
        <el-container class="basic-layout__main">
          <el-header class="basic-layout__hd">
            <!-- top-nav in main content will inject this area using position:absolute -->
            <top-bar></top-bar>
          </el-header>
          <el-main class="basic-layout__bd">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>

      <el-footer class="player">
        <div class="player__cover">
          <el-avatar 
            shape="square" 
            size="large" 
            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
        </div>
        <div class="player__info">
          <h1>天亮以后说再见<small>曲消冰</small></h1>
          <meta>02:24 / 04:12</meta>
        </div>
        <div class="player__controls">
          <i class="el-icon-star-on"></i>
          <i class="el-icon-caret-left"></i>
          <i class="el-icon-video-play"></i>
          <i class="el-icon-caret-right"></i>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TopBar from './TopBar'
import SidePane from './SidePane'

export default {
  name: 'basic-layout',
  data () {
    return {
      
    }
  },
  components: {
    TopBar,
    SidePane
  },
  mounted () {
    
  }
}
</script>

<style lang="scss">
  @import '@/styles/var';

  .basic-layout {
    min-width: 1024px;
    & > .el-container {
      height: 100vh;
      color: $font_color;
    }
    .basic-layout__side {
      width: $side_width !important;
      background: $side_bg_color;
      h1 {
        height: $header_size - 20;
        background-color: $header_bg_color;
      }
    }
    .basic-layout__main {
      background-color: $main_bg_color;
      position: relative;
    }
    .basic-layout__hd {
      height: $header_size !important;
      background-color: $header_bg_color;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      overflow: hidden;
    }
    .basic-layout__bd {
      flex: 1
    }

    .top-nav {
      position: absolute;
      left: 0;
      top: 0;
      height: $header_size;
      display: flex;
      align-items: center;
      & > a {
        padding: 0 10px;
        color: $font_reverse_secondary_color;
        font-size: 120%;
        &.is-actived {
          color: $font_reverse_color;
          font-weight: bold
        }
      }
    }
  }
</style>
