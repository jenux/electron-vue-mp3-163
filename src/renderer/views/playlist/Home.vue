<template>
  <div class="playlist-home">
    <top-list 
      :cat="cat"></top-list>
    <data-list 
      :cat="cat"
      v-on:cat-changed="onCatChanged"></data-list>
  </div>
</template>

<script>
import TopList from './TopList'
import DataList from './List'

export default {
  name: 'playlist-home',
  components: {
    TopList,
    DataList
  },
  data () {
    return {
      cat: '全部'
    }
  },
  methods: {
    onCatChanged (payload) {
      this.cat = payload.cat
    }
  }
}
</script>
