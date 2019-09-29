<template>
  <div class="artist">
    <div class="catlist">
      <p>
        <el-button size="mini" round
          :type="selected.cat == '' && selected.initial == '' ? 'primary' : ''"
          @click="fetchAll">全部</el-button>
      </p>
      <dl class="tags"
        v-for="group in catList"
        :key="group.name">
        <dt>{{ group.name }}:</dt>
        <dd>
          <a 
            class="tag__item"
            v-for="tag in group.tags"
            :class="{'is-actived': selected.cat === tag.value}"
            :key="tag.value"
            @click="fetchListByCate(tag.value)">{{ tag.label }}</a>
        </dd>
      </dl>
      <dl class="tags">
        <dt>筛选:</dt>
        <dd>
          <a 
            class="tag__item"
            v-for="tag in ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']"
            :class="{'is-actived': selected.initial === tag}"
            :key="tag"
            @click="fetchListByInitial(tag)">{{ tag | upperCase }}</a>
        </dd>
      </dl>
    </div>
    <div v-loading="list.loading">
      <div 
        class="card-list artist-list" 
        v-infinite-scroll="fetchList"
        infinite-scroll-disabled="disableInfiniteLoading"
      >
        <div class="card-list__item artist__item">
          <div class="cover">
            <img src="/static/images/artist_rank.png" class="image" />
          </div>
          <div class="label">歌手排行榜</div>
        </div>
        <div v-for="p in list.data" :key="p.id"
          class="card-list__item artist-item"> 
          <div class="cover"
            v-lazy-container="{ selector: 'img'}">
            <img 
              :data-src="p.picUrl" 
              :data-loading="'/static/images/default_avatar.jpg'"
              class="cover">
          </div>
          <div class="label">{{p.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { createNamespacedHelpers } from 'vuex'
const { 
  mapActions, 
  mapState 
} = createNamespacedHelpers('Artist')

export default {
  name: 'artist',
  data () {
    return {
      selected: {
        cat: '',
        initial: ''
      },
      
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
    this.$store.dispatch('Artist/getCatList')
    this.fetchList();
  },
  computed: {
    ...mapState(['catList']),
    disableInfiniteLoading () {
      return this.list.loading || !this.list.hasMore
    }
  },
  methods: {
    ...mapActions([
      'getList'
    ]),
    fetchAll () {
      this.selected.cat = ''
      this.selected.initial = ''
      object.assign(this.list, {
        hasMore: true,
        data: [],
        page: 1
      })
      this.fetchList()
    },
    fetchListByInitial (val) {
      if (val === this.selected.initial) {
        return
      }
      this.selected.initial = val
      // reset hasMore flag
      Object.assign(this.list, {
        hasMore: true,
        data: [],
        page: 1
      })

      this.fetchList()
    },
    fetchListByCate (val) {
      if (val === this.selected.cat) {
        return
      }
      this.selected.cat = val
      // reset hasMore flag
      Object.assign(this.list, {
        hasMore: true,
        data: [],
        page: 1
      })

      this.fetchList()
    },
    fetchList() {      
      if (!this.list.hasMore) {
        return
      }
      this.list.loading = true
      let { limit, page } = this.list
      let { cat, initial } = this.selected
      let params = {
        cat,
        initial,
        limit,
        offset: limit * (page-1)
      }
      this.list.loading = true
      this.getList(params).then(({
        artists,
        more
      }) => {
        this.list.data = [...this.list.data, ...artists]

        if (artists.length) {
          this.list.page += 1
        }

        this.list.hasMore = more
        this.list.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
  .artist {
    .tags {
      dt {
        width: 5em;
      }
    }
    .catlist > p {
      margin-bottom: 10px;
    }
  }
</style>
