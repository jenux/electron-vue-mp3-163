<template>
  <div v-loading="mv.loading">
    <div 
      class="card-list artist-mv-list" 
      
      
    >
      <div
        class="card-list__item mv-item"
        v-for="p in mv.data" 
        :key="p.id"
        @click="navToDetail(p)"> 
        <div class="cover"
          v-lazy-container="{ selector: 'img'}">
          <img 
            :data-src="p.imgurl16v9" 
            :data-loading="'/static/images/default_avatar.jpg'"
            class="cover">
          <div class="duration">{{ p.duration }}</div>
          <div class="score">
            <i class="el-icon-caret-right" />
            {{ p.playCount }}
          </div>
        </div>
        <div class="label">{{p.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { createNamespacedHelpers } from 'vuex'
  const { 
    mapActions 
  } = createNamespacedHelpers('Artist')
  
  export default {
    name: 'artist-mv',
    props: [
      'artistId'
    ],
    data () {
      return {
        mv: {
          loading: false,
          data: [],
          page: 1,
          limit: 50,
          hasMore: true
        }
      }
    },
    computed: {
      disableInfiniteLoading () {
        return this.mv.loading || !this.mv.hasMore
      }
    },
    methods: {
      ...mapActions(['getArtistMV']),
      fetchData () {
        if (!this.mv.hasMore) return
        let { page, limit } = this.mv
        let offset = (page - 1) * limit
        let params = {
          limit,
          offset
        }
        this.mv.loading = true
        this.getArtistMV({
          id: this.artistId,
          ...params
        })
          .then(res => {
            this.mv.data.push(...res.mvs);
            this.mv.hasMore = res.hasMore
            this.mv.loading = false
          })
      }
    },
    mounted () {
      this.fetchData()
    }
  }
</script>

<style lang="scss">
  .artist-mv-list {
    .mv-item {
      width: 225px;
      .cover {
        height: 130px;
        position: relative;
      }
      .duration,
      .score {
        position: absolute;
      }
      .score {
        top: 5px;
        right: 8px;
      }
      .duration {
        bottom: 5px;
        right: 8px;
      }
    }
  }
</style>
