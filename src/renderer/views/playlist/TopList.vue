<template>
  <div class="top-list">
    <el-carousel 
      height="170px"
      direction="vertical" 
      :autoplay="true"
      class="top-list"
      v-loading="topList.loading">
      <el-carousel-item v-for="item in topList.data" :key="item.id">
        <div class="top-list__item">
          <div class="cover">
            <img v-lazy="item.coverImgUrl" />
          </div>
          <div class="content">
            精品歌单
            <h1>{{ item.name }}</h1>
            <h3 class="medium">{{ item.copywriter }}</h3>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { createNamespacedHelpers } from 'vuex'
  const { 
    mapActions,
  } = createNamespacedHelpers('Playlist')

  // 精品歌单
  export default {
    name: 'playlist-toplist',
    props: ['cat'],
    data () {
      return {
        hello: 'hello',
        topList: {
          loading: false,
          data: []
        }
      }
    },
    methods: {
      ...mapActions([
        'getTopList'
      ]),
      fetchData () {
        let cat = this.cat
        this.topList.loading = true
        this.getTopList({cat, limit:3})
          .then(({playlists}) => {
            Object.assign(this.topList, {
              data: playlists,
              loading: false
            })
          })
      },
    },
    mounted () {
      this.fetchData()
    }
  }
</script>

<style lang="scss">
  .top-list {
    background: #eee;
    border-radius: 10px;
  }
  .el-carousel__item {
    background: transparent !important;
    & > div {
      padding: 15px;
      display: flex;
    }
    .cover {
      width: 140px;
      height: 140px;
      margin-right: 15px;
      img {
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
      }
    }
    .content {
      flex: 1
    }
  }
</style>
