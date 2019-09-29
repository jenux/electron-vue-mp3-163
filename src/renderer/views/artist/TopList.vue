<template>
  <div class="artist__toplist">
    <el-page-header
      :content="$route.meta.title"
      @back="goBack">
    </el-page-header>

    <el-row :gutter="20">
      <el-col 
        :span="8"
        v-for="(item, $index) in top3List"
        :key="item.id">
        <div class="toplist__card">
          <div class="index">{{ $index + 1 }}</div>
          <div class="cover"
            v-lazy-container="{ selector: 'img'}">
            <img 
              :data-src="item.picUrl" 
              :data-loading="'/static/images/default_avatar.jpg'"
              class="cover">
          </div>
          <div class="info">
            <h1>{{item.name}}</h1>
            <div class="score">热度: {{ item.score }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    
    <el-table
      :data="restList"
      stripe
      style="width: 100%"
      :show-header="false">
      <el-table-column
        width="50"
        align="center">
        <template slot-scope="scope">
          <div class="index">
            <b>{{ scope.row.index }}</b>
            <small>
              <i class="el-icon-bottom" v-if="scope.row.compareLast < 0" />
              <i class="el-icon-top" v-if="scope.row.compareLast > 0" />
              <span v-if="scope.row.compareLast == 0">-</span>
              {{ scope.row.compareLast }}</small>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        width="80">
        <template slot-scope="scope">
          <div class="cover"
            v-lazy-container="{ selector: 'img'}">
            <img 
              :data-src="scope.row.picUrl" 
              :data-loading="'/static/images/default_avatar.jpg'"
              class="cover">
          </div>
        </template>
      </el-table-column>
      <el-table-column
        property="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        label="热度"
        width="120">
        <template slot-scope="scope">
          热度: {{ scope.row.score }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { 
    mapState 
  } = createNamespacedHelpers('Artist')

  export default {
    name: 'artist-toplist',
    data () {
      return {}
    },
    computed: {
      ...mapState(['topList']),
      top3List () {
        return this.topList.slice(0, 3)
      },
      restList () {
        return this.topList.slice(3).map((item, index) => {
          item.compareLast = item.lastRank - (index + 3)
          item.index = index + 4
          return item
        })
      }
    },
    methods: {
      goBack() {
        this.$router.replace({name: 'artist'})
      },
      indexMethod (index) {
        return index + 4
      }
    },
    mounted () {
      this.$store.dispatch('Artist/getTopList')
    }
  }
</script>

<style lang="scss">
  @import "@/styles/var";

  .artist__toplist {
    .toplist__card {
      display: flex;
      height: 100px;
      margin: 20px 0;
      background: #eee;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      .index {
        font-size: 3em;
        color: $font_hl_color;
        opacity: .3;
      }
      .cover {
        width: 100px;
        height: 100%;
        order: 2;
        img {
          height: 100%;
          object-fit: cover;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
      .info {
        flex: 1;
        padding: 20px;
        h1 {
          font-size: 1.5em;
        }
        .score {
          color: $font_secondary_color;
        }
      }
    }
    .el-table {
      .index {
        display: flex;
        flex-direction: column;
        b {
          font-size: 1.5em;
        }
        small {
          font-size: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .cover {
        img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 8px;
        }
      }
    }
  }
</style>
