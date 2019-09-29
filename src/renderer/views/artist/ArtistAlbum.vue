<template>
  <div class="artist__album">
    <el-container class="hot-songs">
      <el-aside width="xxx">
        <img src="/static/images/default_album.jpg" />
      </el-aside>
      <el-main>
        <h1>热门50首</h1>
        <el-table
          :data="hotSongs"
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'artist-album',
  props: ['hotSongs']
}
</script>
<style lang="scss">
  .artist__album {
    .hot-songs {
      .el-aside {
        width: 150px;
        img {
          width: 100%;
          height: 150px;
          object-fit: cover
        }
      }
    }
  }
</style>
