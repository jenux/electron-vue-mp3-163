<template>
  <div>
    <nav class="top-nav">
      <router-link class="actived" to="/discover/recommend">个性推荐</router-link>
      <router-link to="/discover/playlist">歌单</router-link>
      <router-link to="/discover/radio">主播电台</router-link>
      <router-link to="/discover/toplist">排行榜</router-link>
      <router-link to="/discover/artist">歌手</router-link>
      <router-link to="/discover/album">最新音乐</router-link>
    </nav>
    <div class="discover">
      <router-view></router-view>
    </div>
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
  nav.top-nav {
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
