<template>
  <div class="artist-desc">
    Desc
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { 
    mapActions 
  } = createNamespacedHelpers('Artist')
  
  export default {
    name: 'artist-desc',
    props: [
      'artistId'
    ],
    data () {
      return {
        desc: {
          loading: false,
          data: {}
        }
      }
    },
    methods: {
      ...mapActions(['getArtistDesc'])
    },
    mounted () {
      this.desc.loading = true
      this.getArtistDesc({
        id: this.artistId
      })
        .then(res => {
          this.desc.data = res;
          this.desc.loading = false
        })
    }
  }
</script>
