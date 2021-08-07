const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let mainWindow

// Functions must be exported to be accessible to the front-end
// Execute OS command and return result to front-end
// Another process is the IPCMaine IPCRenderer
// https://electronjs.org/docs/api/ipc-main
// https://electronjs.org/docs/api/ipc-renderer
exports.execProcess = (process, callback) => {
  const { exec } = require('child_process')
  const callExec = exec(process)

  callExec.stdout.on('data', function (data) {
    callback(data)
  })
  callExec.stderr.on('data', function (data) {
    callback("<b>ERROR:</b> \n" + data)
  })
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,

    // Window's Visual Features 
    frame: false, // Remove top bar 
    useContentSize: false, // Inhibit window size display 

    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => {
    mainWindow = null
  });
};

app.whenReady()
  .then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});
