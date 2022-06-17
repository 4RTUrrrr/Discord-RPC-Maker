const { BrowserWindow, app, ipcMain } = require('electron')
const setRPC = require('./setRPC').setRPC
const deleteRPC = require('./setRPC').deleteRPC

let window

function createWindow() {
    // Create the browser window.
    window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: "./assets/icon.png",
        webPreferences: {
            nodeIntegration: true,
            preload: __dirname + '/preload.js'
        }
    })
    window.title = "Discord Rich Presence Maker"
}

app.on('ready', () => {
    console.log('Ready, running')
    createWindow()
    window.loadFile('./front-end/index.html')
})

ipcMain.on('setRPC', (event, data) => {
    setTimeout(() => {
        setRPC(data)
    }, 1000)
    console.log('seted RPC')
})
ipcMain.on('deleteRPC', (event, data) => {
    deleteRPC()
    console.log("Deleted RPC")
})