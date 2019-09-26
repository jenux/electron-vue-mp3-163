<template>
  <div class="basic-layout">
    <el-container>
      <el-container>
        <el-aside class="basic-layout__side" width="200">
          <side-pane></side-pane>
        </el-aside>
        
        <el-container class="basic-layout__main">
          <el-header class="basic-layout__hd" style="height:50px">
            <div class="toolbar">
              <el-input 
                size="mini"
                prefix-icon="el-icon-search"
                placeholder="搜索"></el-input>
              <i class="el-icon-setting"></i>
              <i class="el-icon-message"></i>
              <i class="el-icon-copy-document"></i>
            </div>
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
import TopNav from './TopNav'
import SidePane from './SidePane'

export default {
  name: 'basic-layout',
  data () {
    return {
      
    }
  },
  components: {
    TopNav,
    SidePane
  },
  mounted () {
    
  }
}
</script>

<style lang="scss">
  $header_size: 50px;
  $header_bg_color: #C20C0C;
  $header_border_color: 1px solid #a40011;

  $side_width: 200px;
  $side_bg: #ededed;
  .basic-layout {
    & > .el-container {
      height: 100vh;
    }
    .basic-layout__side {
      width: $side_width;
      background: $side_bg;
      color: #333;
      h1 {
        height: $header_size - 20;
        background-color: $header_bg_color;
      }
    }
    .basic-layout__main {
      background-color: #fff;
      position: relative;
    }
    .basic-layout__hd {
      height: $header_size;
      background-color: $header_bg_color;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      overflow: hidden;
      .toolbar {
        display: flex;
        align-items: center;
        [class^=el-icon-] {
          color: #fff;
          margin-left: 10px;
        }
      }
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
      & > * {
        padding: 0 10px;
        color: #eee;
        &.is-actived {
          color: #fff;
          font-weight: bold
        }
      }
    }
    .player {
      // width: 100%;
      // height: 40px;
      // padding: 12px;
      // position: fixed;
      left: 0;
      bottom: 0;
      border-top: 1px solid #ddd;
      background: #eee;
      display: flex;
      align-items: center;
      h1 {
        font-size: 18px;

        small {
          font-size: 12px;
          font-weight: normal;
          color: #999;
          &::before {
            content: ' - '
          }
        }
      }
      .player__info {
        flex: 1;
        margin: 0 10px;
      }
      .player__controls {
        display: flex;
        margin-right: 10px;
        align-items: center;
        i {
          margin: 10px;
          font-size: 2em;
        }
        .el-icon-video-play {
          font-size: 3em;
        }
      }
    }
  }
</style>
