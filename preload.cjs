const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', ipcRenderer.send);