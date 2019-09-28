<template>
  <div id="app" ref="appRoot">
    <router-view></router-view>
  </div>
</template>

<script>
  import { showNotification } from '@/utils'

  export default {
    name: 'app',
    created () {
      
    },
    mounted () {
      this.handleNetworkChange('欢迎回来')
      this.$electron.ipcRenderer.on('will-close', () => {
        this.handleWillClose()
        this.$electron.ipcRenderer.send('app-exit')
      })

      window.onunload = () => {
        this.handleWillClose()
      }

      window.onoffline = () => {
        this.handleNetworkChange('请检查您的网络', '', false)
      }

      window.ononline = () => {
        this.handleNetworkChange('网络连接成功')
      }
    },
    methods: {
      handleWillClose () {
        
      },
      handleNetworkChange(title = '', message = '', status = true) {
        showNotification({
          title,
          message
        })
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
