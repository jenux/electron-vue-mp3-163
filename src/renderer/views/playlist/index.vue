<template>
  <div class="playlist">
    <el-carousel 
      height="170px"
      direction="vertical" 
      :autoplay="true"
      class="top-list"
      v-loading="list.loading">
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

    <dl class="list-data">
      <dt class="sub-header">
        <el-popover
          placement="bottom right"
          width="400"
          trigger="click"
          v-model="isShowCatlist"
        >
          <div class="catlist--dropdown">
            <a
              :class="{'is-actived': list.cat == '全部'}"
              @click="fetchListByCate('')">{{catList.all.name}}</a>
            <el-divider></el-divider>
            <dl class="tags"
              v-for="(arr, $index) in catList.data"
              :key="$index">
              <dt>{{ catList.categories[$index] }}</dt>
              <dd>
                <a 
                  v-for="tag in arr" 
                  :key="tag.id"
                  :class="{'is-actived': tag.name === list.cat}"
                  @click="fetchListByCate(tag.name)"
                >{{ tag.name }}<sup v-if="tag.hot">hot</sup></a>
              </dd>
            </dl>
          </div>
          <el-button round slot="reference">
            {{ list.cat == '全部' ? catList.all.name : list.cat }}
            <i class="el-icon-arrow-right el-icon--right" />
          </el-button>
        </el-popover>

        <div class="sub-header__extra hot-cat-list">
          <a 
            class="hot-cat-list__item"
            v-for="item in hotCatList" 
            :class="{'is-actived': item.name === list.cat}"
            :key="item.id"
            @click="fetchListByCate(item.name)"
          >{{ item.name }}</a>
        </div>
      </dt>

      <dd v-loading="list.loading">
        <p style="text-align: right; display: none">
            <el-switch
            v-model="orderByHot"
            active-text="最热"
            inactive-text="最新">
          </el-switch>
        </p>
        <div 
          class="card-list"
          v-infinite-scroll="fetchList"
          infinite-scroll-disabled="disableInfiniteLoading">
          <div 
            class="card-list__item playlist-card" 
            v-for="item in list.data" 
            :key="item.id">
            <div class="cover">
              <img 
                v-lazy="item.coverImgUrl" 
                class="cover" />
              <div class="creator">
                <i class="el-icon-user" />
                {{ item.creator.nickname }}
              </div>
              <div class="count">
                <i class="el-icon-caret-right" />
                {{ item.playCount }}
              </div>
            </div>
            <div class="label">{{ item.name }}</div>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import _ from 'lodash'
import { createNamespacedHelpers } from 'vuex'
const { 
  mapActions, 
  mapState 
} = createNamespacedHelpers('Playlist')

export default {
  name: 'playlist',
  data () {
    return {
      isShowCatlist: false,
      orderByHot: true,
      topList: {
        loading: false,
        data: []
      },
      list: {
        loading: false,
        order: '',
        data: [],
        page: 1,
        limit: 12,
        total: 0,
        hasMore: true,
        cat: ''
      }
    }
  },
  mounted () {
    this.$store.dispatch('Playlist/getCatList')
    this.$store.dispatch('Playlist/getHotCatList')
    this.fetchData();
  },
  computed: {
    ...mapState(['catList', 'hotCatList']),
    disableInfiniteLoading () {
      return this.list.loading || !this.list.hasMore
    }
  },
  methods: {
    ...mapActions([
      'getList',
      'getTopList'
    ]),
    fetchListByCate (cat) {
      // close dropdown
      this.isShowCatlist = false

      if (cat === this.list.cat) {
        return
      }
      // reset hasMore flag
      Object.assign(this.list, {
        hasMore: true,
        data: [],
        page: 1,
        cat
      })

      this.fetchData()
    },
    fetchData () {
      this.fetchTopList()
      this.fetchList()
    },
    fetchTopList () {
      let { cat } = this.list
      this.topList.loading = true
      this.getTopList({cat, limit:3})
        .then(({playlists}) => {
          Object.assign(this.topList, {
            data: playlists,
            loading: false
          })
        })
    },
    fetchList() {
      if (!this.list.hasMore) {
        return
      }
      let { cat, limit, page } = this.list
      let order = this.orderByHot ? 'hot' : 'new'
      let params = {
        cat,
        limit,
        order,
        offset: limit * (page-1)
      }
      
      this.list.loading = true
      this.getList(params).then(({playlists, total, cat, more}) => {
        this.list.data = [...this.list.data, ...playlists]

        if (playlists.length) {
          this.list.page += 1
        }
        Object.assign(this.list, {
          total,
          cat,
          hasMore: more,
          loading: false
        })
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/var';

  .catlist--dropdown {
    a {
      margin: 0 10px;
      cursor: pointer;
    }
    a.is-actived {
      color: $font_hl_color
    }
    dl {
      margin: 10px 0;
      padding: 5px 15px;
      dt {
        width: 30px;
      }
      dd {
        max-width: 400px;
        display: flex;
        flex-wrap: wrap;
      };
    }
  }
  .playlist {
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
    .sub-header__extra {
      p {
        margin-bottom: 5px
      }
    }
    .hot-cate-list__item {
      margin: 0;
      padding-left: 10px;
      cursor: pointer;
      &:after {
        content: '|';
        color: #ccc;
        padding-left: 10px;
      }
      &:last-child:after {
        content: '';
        padding-left: 0
      }
      &.is-actived {
        color: $font_hl_color
      }
    }
  }
</style>
