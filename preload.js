const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  enviarDados: (dados) => ipcRenderer.invoke('enviar-dados', dados)
});