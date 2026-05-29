const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const fs = require("fs");

function createWindow() {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + "/preload.js"
        }
    });

    win.loadFile("./renderer/index.html");
}

app.whenReady().then(createWindow);

ipcMain.handle("save-note", async (event, note) => {

    const result = await dialog.showOpenDialog({
        properties: ["openDirectory"]
    });

    if (result.canceled) return;

    const folderPath = result.filePaths[0];

    const filePath = `${folderPath}/${note.title}.txt`;

    fs.writeFileSync(filePath, note.text);

    return {
        success: true
    };
});