const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    titleBarStyle: 'hidden'
  });

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });
  
  win.loadURL(startUrl);

}

app.on('ready', createWindow);