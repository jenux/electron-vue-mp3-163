<template>
  <div class="artist__album">
    <el-container class="album-item">
      <el-aside width="xxx">
        <img src="/static/images/default_album.jpg" />
      </el-aside>
      <el-main>
        <dl>
          <dt>
            <h1 class="section-title">热门50首</h1>
          </dt>
          <dd>
            <el-table
              v-if="hotSongs"
              :data="hotSongs.slice(0, 10)"
              stripe
              style="width: 100%"
              :show-header="false">
              <el-table-column
                width="40"
                type="index">
              </el-table-column>
              <el-table-column
                width="40"
                align="center">
                <template>
                  <i class="el-icon-star-off"/>
                </template>
              </el-table-column>
              <el-table-column
                width="40"
                align="center">
                <template>
                  <i class="el-icon-download"></i>
                </template>
              </el-table-column>
              <el-table-column
              
                prop="name">
              </el-table-column>
            </el-table>
          </dd>
        </dl>
      </el-main>
    </el-container>
    <el-container class="album-item" 
      v-for="album in albums.data"
      :key="album.id">
      <el-aside width="xxx">
        <div class="cover">
          <img v-lazy="album.picUrl" />
        </div>
      </el-aside>
      <el-main>
        <dl>
          <dt>
            <h1 class="section-title">{{ album.name }}</h1>
          </dt>
          <dd>
            <el-table
              :data="album.songs"
              stripe
              style="width: 100%"
              :show-header="false">
              <el-table-column
                width="40"
                type="index">
              </el-table-column>
              <el-table-column
                width="40"
                align="center">
                <template>
                  <i class="el-icon-star-off"/>
                </template>
              </el-table-column>
              <el-table-column
                width="40"
                align="center">
                <template>
                  <i class="el-icon-download"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="name">
              </el-table-column>
            </el-table>
          </dd>
        </dl>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { 
    mapActions 
  } = createNamespacedHelpers('Artist')
  
  export default {
    name: 'artist-album',
    props: [
      'hotSongs', 
      'artistId'
    ],
    data () {
      return {
        albums: {
          loading: false,
          data: []
        }
      }
    },
    methods: {
      ...mapActions(['getArtistAlbum'])
    },
    mounted () {
      this.albums.loading = true
      this.getArtistAlbum({
        id: this.artistId
      })
        .then(res => {
          this.albums.data = res.hotAlbums;
          this.albums.loading = false
        })
    }
  }
</script>
<style lang="scss">
  @import "@/styles/var";

  .artist__album {
    .album-item {
      margin-bottom: 20px;
      .el-aside {
        width: 160px;
        img {
          width: 120px;
          height: 120px;
          object-fit: cover
        }
        .cover {
          width: 145px;
          background: $main_bg_color url('/static/images/bg-coverall.png') no-repeat;
          background-position: -170px -850px;
        }
      }
      .el-main {
        h1 {
          font-size: 1.2em;
        }
        dl {
          margin-top: 0
        }
      }
    }
  }
</style>
