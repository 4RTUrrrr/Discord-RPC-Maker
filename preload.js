const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    send: (name, data) => {
        ipcRenderer.send(name, data);
    }
});