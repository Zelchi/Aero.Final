import { app, BrowserWindow, ipcMain } from 'electron';
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
    const win = new BrowserWindow({
        icon: './public/invader.png',
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            sandbox: false,
            preload: path.join(__dirname, 'preload.cjs')
        },
        width: 1280,
        minWidth: 1280,
        maxWidth: 1280,
        height: 720,
        minHeight: 720,
        minHeight: 720,
        resizable: false,
    });
    win.loadURL('http://localhost:5173');

    ipcMain.on('minimizar', () => {
        win.minimize();
    })

    ipcMain.on('fechar', () => {
        win.close();
    });
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') app.quit();
})