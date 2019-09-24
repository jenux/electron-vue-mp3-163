import { app, BrowserWindow, ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 1000,
    title: '网易云音乐',
    autoHideMenuBar: false,
    show: false,
    frame: true,
    useContentSize: true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  ipcMain.on('player:window:close', function(e) {
    try {
      e.sender.getOwnerBrowserWindow().close()
    } catch (err) {
      console.log(`[WARN] mainWindow couldn't be closed, ${err}`)
    }
  })

  ipcMain.on('player:window:maximize', function (e) {
    if (mainWindow.isMaximized()) {
      mainWindow.unMaximized()
    } else {
      mainWindow.maximize()
    }
  })

  ipcMain.on('player:window:minimize', function (e) {
    mainWindow.minimize()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
