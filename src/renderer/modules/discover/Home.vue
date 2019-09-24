<template>
  <div class="discover">
    <nav>
      <router-link class="actived" to="/discover/recommend">推荐</router-link>
      <router-link to="/discover/toplist">排行榜</router-link>
      <router-link to="/discover/playlist">歌单</router-link>
      <router-link to="/discover/radio">主播电台</router-link>
      <router-link to="/discover/artist">歌手</router-link>
      <router-link to="/discover/album">新碟上架</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    
  }
}
</script>

<style lang="scss">
.discover {
  nav {
    height: 35px;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
    display: flex;
    padding: 0 20px;
    align-items: center;
    color: white;
    a {
      color: inherit;
      margin: 0 17px;
      padding: 0 13px;
      position: relative;

      &.actived,
      &:hover {
        background-color: #9B0909;
        border-radius: 20px;
      }

      &.actived {
        &::after {
          display: block;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid #C20C0C;
          width: 0;
          height: 0;
          content: ' ';
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-5px)
        }
      }
    }
  }
}
</style>