const {app, BrowserWindow, ipcMain} = require('electron')
const {open} = require('sqlite');
const sqlite3 = require('sqlite3');


let mainWindow;
let db;

async function createWindow() {
    mainWindow = new BrowserWindow({
    minWidth: 1280,
    minHeight: 720,
    show: false,
    titleBarOverlay: true,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: true
    }
    });
    mainWindow.setMenuBarVisibility(false);
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    })
    await mainWindow.loadFile('app/index.html')
    await startDatabase();
    mainWindow.maximize(); // Maximiza a janela
    mainWindow.show(); // Exibe a janela maximizada
}
async function startDatabase () {
    db = await open({
        filename: 'app/database/syncsweat.db',
        driver: sqlite3.Database
    });
    await db.exec('CREATE TABLE IF NOT EXISTS activities (activity_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, metric1 TEXT, metric2 TEXT)');
    await db.exec('CREATE TABLE IF NOT EXISTS workout (workout_id INTEGER PRIMARY KEY AUTOINCREMENT, activity_id INTEGER, workout_date DATE, metric1_value REAL, metric2_value, FOREIGN KEY (activity_id) REFERENCES acitivities (activity_id))');
}
app.on('ready', createWindow);
app.on('will-quit', async()=>{
    if (db){
        await db.close();
    }
})
async function delTable(tableName){
    await db.exec(`DROP TABLE IF EXISTS ${tableName}`)
}
module.exports = { mainWindow };