const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url')
const { spawn } = require('child_process');
let browserWindow;
const craeteWindow = (() => {
  browserWindow = new BrowserWindow({ width: 1024, height: 768, show: false })
  browserWindow.loadURL('http://127.0.0.1:8080')
  browserWindow.once('ready-to-show', () => {
    browserWindow.show();
  });
});
app.whenReady().then(() => {

  const child = spawn('node', [__dirname + path.join('/app.js')])

  // Listen for output from the child process
  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  })

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  })

  // Listen for the child process to exit
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  })

  craeteWindow()

})