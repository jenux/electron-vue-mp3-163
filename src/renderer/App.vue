<template>
  <div id="app" ref="appRoot">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created () {
      this.handleNetworkChange('请检查您的网络', false)
    },
    mounted () {
      this.handleNetworkChange('网络连接成功')
      this.$electron.ipcRenderer.on('will-close', () => {
        this.handleWillClose()
        this.$electron.ipcRenderer.send('app-exit')
      })

      window.onunload = () => {
        this.handleWillClose()
      }

      window.onoffline = () => {
        this.handleWillClose('请检查您的网络', false)
      }

      window.ononline = () => {
        this.handleNetworkChange('网络连接成功')
      }
    },
    methods: {
      handleWillClose () {
        
      },
      handleNetworkChange(message = '', status = true) {
        let { title } = this.$config
        let notification = new Notification(title, {
          title,
          body: message,
          icon: 'static/images/icon.ico'
        })
        console.info('**** status changed: ', status)
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
