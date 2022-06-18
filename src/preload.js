const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that will be used in front-end
contextBridge.exposeInMainWorld("api", {
    send: (name, data) => {
        ipcRenderer.send(name, data);
    }
});