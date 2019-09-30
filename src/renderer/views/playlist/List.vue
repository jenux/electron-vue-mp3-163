<template>
  <dl class="playlist-list">
    <dt class="sub-header">
      <el-popover
        placement="bottom right"
        width="400"
        trigger="click"
        v-model="isShowCatlist"
      >
        <div class="catlist--dropdown">
          <a
            :class="{'is-actived': cat == '全部'}"
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
                :class="{'is-actived': tag.name === cat}"
                @click="fetchListByCate(tag.name)"
              >{{ tag.name }}<sup v-if="tag.hot">hot</sup></a>
            </dd>
          </dl>
        </div>
        <el-button round slot="reference">
          {{ cat == '全部' ? catList.all.name : cat }}
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </el-popover>

      <div class="sub-header__extra hot-cat-list">
        <a 
          class="hot-cat-list__item"
          v-for="item in hotCatList" 
          :class="{'is-actived': item.name === cat}"
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
</template>

<script>
import _ from 'lodash'
import { createNamespacedHelpers } from 'vuex'
const { 
  mapActions, 
  mapState 
} = createNamespacedHelpers('Playlist')

export default {
  name: 'playlist-list',
  props: ['cat'],
  data () {
    return {
      isShowCatlist: false,
      orderByHot: true,
      list: {
        loading: false,
        order: '',
        data: [],
        page: 1,
        limit: 12,
        total: 0,
        hasMore: true
      }
    }
  },
  mounted () {
    this.$store.dispatch('Playlist/getCatList')
    this.fetchList();
  },
  computed: {
    ...mapState(['catList', 'hotCatList']),
    disableInfiniteLoading () {
      return this.list.loading || !this.list.hasMore
    }
  },
  methods: {
    ...mapActions([
      'getList'
    ]),
    fetchListByCate (newcate) {
      // close dropdown
      this.isShowCatlist = false

      if (newcate === this.cat) {
        return
      }
      // reset hasMore flag 
      this.list.page = 1
      this.list.hasMore = true
      this.list.data = []

      this.fetchList({cat: newcate})
    },
    fetchList(opts) {
      if (!this.list.hasMore) {
        return
      }
      let { cat, limit, page } = this.list
      if (opts && opts.cat) {
        cat = opts.cat
      }
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
        this.list.hasMore = more;
        this.list.loading = false;
        this.$emit('cat-changed', {cat})
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
  .playlist-list {
    .sub-header__extra {
      p {
        margin-bottom: 5px
      }
    }
    .hot-cat-list__item {
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
