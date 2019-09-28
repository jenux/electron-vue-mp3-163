<template>
  <div class="playlist">
    <el-carousel 
      height="170px"
      direction="vertical" 
      :autoplay="true"
      v-loading="highQuality.loading">
      <el-carousel-item v-for="item in highQuality.data" :key="item.id">
        <div>
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

    <dl>
      <dt class="sub-header">
        <el-popover
          placement="bottom right"
          width="400"
          trigger="click"
          v-model="isShowCatlist"
        >
          <div class="catlist--dropdown">
            <a
              :class="{'is-actived': topList.cat == '全部'}"
              @click="fetchTopListByCate('')">{{catList.all.name}}</a>
            <el-divider></el-divider>
            <dl class="tags"
              v-for="(arr, $index) in catList.data"
              :key="$index">
              <dt>{{ catList.categories[$index] }}</dt>
              <dd>
                <a 
                  v-for="tag in arr" 
                  :key="tag.id"
                  :class="{'is-actived': tag.name === topList.cat}"
                  @click="fetchTopListByCate(tag.name)"
                >{{ tag.name }}<sup v-if="tag.hot">hot</sup></a>
              </dd>
            </dl>
          </div>
          <el-button round slot="reference">
            {{ topList.cat == '全部' ? catList.all.name : topList.cat }}
            <i class="el-icon-arrow-right el-icon--right" />
          </el-button>
        </el-popover>
        <div class="sub-header__extra">
          <a 
            class="hot-cate__item"
            v-for="item in hotCats" 
            :class="{'is-actived': item.name === topList.cat}"
            :key="item.id"
            @click="fetchTopListByCate(item.name)"
          >{{ item.name }}</a>
        </div>
      </dt>

      <dd v-loading="topList.loading">
        <p style="text-align: right; display: none">
            <el-switch
            v-model="orderByHot"
            active-text="最热"
            inactive-text="最新">
          </el-switch>
        </p>
        <div 
          class="card-list"
          v-infinite-scroll="fetchTopList"
          infinite-scroll-disabled="disableInfiniteLoading">
          <div 
            class="card-list__item playlist-card" 
            v-for="item in topList.data" 
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
            <div class="label">{{ item.name }} | 那些年</div>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import _ from 'lodash'
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState } = createNamespacedHelpers('Playlist')

export default {
  name: 'playlist',
  data () {
    return {
      isShowCatlist: false,
      orderByHot: true,
      highQuality: {
        loading: false,
        data: []
      },
      topList: {
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
    this.$store.dispatch('Playlist/getHotCats')
    this.fetchData();
  },
  computed: {
    ...mapState(['catList', 'hotCats']),
    disableInfiniteLoading () {
      return this.topList.loading || !this.topList.hasMore
    }
  },
  methods: {
    ...mapActions([
      'getTopList',
      'getHighQuality'
    ]),
    fetchTopListByCate (cat) {
      // close dropdown
      this.isShowCatlist = false

      if (cat === this.topList.cat) {
        return
      }
      // reset hasMore flag
      Object.assign(this.topList, {
        hasMore: true,
        data: [],
        page: 1,
        cat
      })

      this.fetchData()
    },
    fetchData () {
      this.fetchHighQuality()
      this.fetchTopList()
    },
    fetchHighQuality () {
      let { cat } = this.topList
      this.highQuality.loading = true
      this.getHighQuality({cat, limit:3})
        .then(({playlists}) => {
          this.highQuality.data = playlists
          this.highQuality.loading = false
        })
    },
    fetchTopList() {
      if (!this.topList.hasMore) {
        return
      }
      let { cat, limit, page } = this.topList
      let order = this.orderByHot ? 'hot' : 'new'
      let params = {
        cat,
        limit,
        order,
        offset: limit * (page-1)
      }
      
      this.topList.loading = true
      // console.info('* fetching: ', cat, page)
      this.getTopList(params).then(({playlists, total, cat, more}) => {
        this.topList.data = [...this.topList.data, ...playlists]

        if (playlists.length) {
          this.topList.page += 1
        }
        Object.assign(this.topList, {
          total,
          cat,
          hasMore: more
        })
        this.topList.loading = false
        // console.info('* done fetching: ', this.topList.cat, this.topList.page)
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
    .el-carousel__item {
      border-radius: 10px;

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
    .hot-cate__item {
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
