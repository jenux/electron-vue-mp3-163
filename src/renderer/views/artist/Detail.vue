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
          <h4 v-if="data.artist.alias.length">
            <span 
              v-for="item in data.artist.alias" 
              :key="item">{{item}}</span>
          </h4>
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
        <el-tabs v-model="selectedTab">
          <el-tab-pane label="专辑" name="album">
            <artist-album 
              :artist-id="$route.params.id"
              :hot-songs="data.hotSongs"></artist-album>
          </el-tab-pane>
          <el-tab-pane label="MV" name="mv">
            <artist-mv 
              :artist-id="$route.params.id"></artist-mv>
          </el-tab-pane>
          <el-tab-pane label="歌手详情" name="desc">
            <artist-desc 
              :artist-id="$route.params.id"></artist-desc>
          </el-tab-pane>
          <el-tab-pane label="相似歌手" name="similar">
            <artist-simi 
              :artist-id="$route.params.id"></artist-simi>
          </el-tab-pane>
          <!-- <el-tab-pane label="演出" name="show">演出</el-tab-pane> -->
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
  import ArtistMv from './ArtistMV'
  import ArtistDesc from './ArtistDesc'
  import ArtistSimi from './ArtistSimi'

  export default {
    name: 'artist-detail',
    data () {
      return {
        loading: false,
        selectedTab: 'album',
        data: {}
      }
    },
    components: {
      ArtistAlbum,
      ArtistMv,
      ArtistDesc,
      ArtistSimi
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
  @import "@/styles/var";

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
        color: $font_secondary_color;
        & > div {
          margin-right: 10px
        }
        b {
          font-weight: normal;
          color: $font_color;
        }
      }
    }
  }
</style>
