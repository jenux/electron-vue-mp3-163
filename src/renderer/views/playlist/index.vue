<template>
  <div class="playlist">
    <!-- {{ $route.fullPath }} -->
    <router-view></router-view>
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
  name: 'playlist-list',
  data () {
    return {
    }
  }
}
</script>
