<template>
  <div class="artist__detail">
    <el-page-header 
      content="歌手主页"
      @back="navBack">
    </el-page-header>
    
    <div v-loading="loading">
      <el-container class="detail__header" v-if="data.artist">
        <el-aside width="xx">
          <div class="cover">
            <img :src="data.artist.picUrl" />
          </div>
        </el-aside>
        <el-main v-if="data">
          <h1>{{ data.artist.name }}</h1>
          <div class="actions">
            <el-button round>
              <i class="el-icon-folder-add" /> 收藏
            </el-button>
            <el-button round>
              <i class="el-icon-s-home" /> 个人主页
            </el-button>
          </div>
          <div class="meta">
            <div><b>单曲数: </b>{{ data.artist.musicSize}}</div>
            <div><b>专辑数: </b>{{ data.artist.albumSize}}</div>
            <div><b>MV数: </b>{{ data.artist.mvSize}}</div>
            <!-- <div><a><b>演出数: </b>2</a></div> -->
          </div>
        </el-main>
      </el-container>

      <div class="detail__main">
        <el-tabs v-model="tabs.selected">
          <el-tab-pane label="专辑" name="album">
            <artist-album :hot-songs="data.hotSongs"></artist-album>
          </el-tab-pane>
          <el-tab-pane label="MV" name="mv">MV</el-tab-pane>
          <el-tab-pane label="歌手详情" name="info">歌手详情</el-tab-pane>
          <el-tab-pane label="相似歌手" name="similar">相似歌手</el-tab-pane>
          <el-tab-pane label="演出" name="show">演出</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { createNamespacedHelpers } from 'vuex'
  const { 
    mapActions 
  } = createNamespacedHelpers('Artist')
  import ArtistAlbum from './ArtistAlbum'

  export default {
    name: 'artist-detail',
    data () {
      return {
        loading: false,
        tabs: {
          selected: 'album'
        },
        data: {}
      }
    },
    components: {
      ArtistAlbum
    },
    methods: {
      ...mapActions(['getArtist']),
      navBack () {
        this.$router.back()
      }
    },
    mounted () {
      this.loading = true
      this.getArtist({id: this.$route.params.id})
        .then(res => {
          Object.assign(this.data, res)
          this.loading = false
        })
    }
  }
</script>

<style lang="scss">
  .artist__detail {
    .el-main {
      padding-top: 0
    }
    .el-aside {
      img {
        object-fit: cover;
      }
    }
    .detail__header {
      margin: 20px 0;
      .el-aside {
        width: 200px;
        .cover {
          img {
            width: 200px;
            height: 200px;
          }
        }
      }
      .actions {
        margin: 15px 0
      }
      h1 {
        font-size: 2em;
      }
      .meta {
        display: flex;
        & > div {
          margin-right: 10px
        }
      }
    }
  }
</style>
