const { app, BrowserWindow, dialog, screen } = require('electron')
const path = require('path')

app.whenReady().then(() => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
        width: 354,
        height: 514,
        frame: false,
        resizable: false,
        alwaysOnTop: true,
        hasShadow: false,
        transparent: true,
        skipTaskbar: true
    })
    win.setBackgroundColor('#FFFFFF')
    win.loadFile('index.html')

    var mainScreen = screen.getPrimaryDisplay();
    var dimensions = mainScreen.size;
    const w = dimensions.width - 354
    const h = dimensions.height - 554
    // console.log(w + " " + h);
    win.setPosition(w, h);
})

app.on('browser-window-blur', function () {
    app.quit();
})