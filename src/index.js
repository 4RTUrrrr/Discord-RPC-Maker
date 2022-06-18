const { BrowserWindow, app, ipcMain } = require('electron')
const setRPC = require('./setRPC').setRPC
const deleteRPC = require('./setRPC').deleteRPC

let window

function createWindow() {
    // Create the browser window.
    window = new BrowserWindow({
        width: 900,
        height: 600,
        icon: "./assets/icon.png",
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            preload: __dirname + '/preload.js'
        },
        minWidth: 500,
        minHeight: 480
    })
    // Set the window title
    window.title = "Discord Rich Presence Maker"
}

// ready callback
app.on('ready', () => {
    console.log('Ready, running')
    // create the window
    createWindow()

    // load the html file
    window.loadFile('./front-end/index.html')
})

// recieve the data from the front-end and pass it to the setRPC function to set the rich presence
ipcMain.on('setRPC', (event, data) => {
    setTimeout(() => {
        setRPC(data)
    }, 1000)
    console.log('seted RPC')
})

//get the 'delete rpc' event and destroy the actual rich presence
ipcMain.on('deleteRPC', (event, data) => {
    deleteRPC()
    console.log("Deleted RPC")
})