/* eslint-disable no-undef */
const { app, BrowserWindow, ipcMain } = require("electron");
const rpc = require("discord-rich-presence")("574263592908488705");
const gameData = require("./games");  

// For the love of God please let there be a better way of handling this
if (require("./installer-events").handleSquirrelEvent(app)) return;

let window;
let aboutWindow;

// Used to create the window
function createWindow () {
    window = new BrowserWindow({
        width: 400,
        height: 500,
        resizable: false,
        maximizable: false,
        icon: __dirname + "/icon.png",
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.setMenu(null);
    window.loadFile("index.html");
    
    window.on("closed", () => {
        window = null;
    });
    
    window.on("ready-to-show", () => window.show());
    
    setIdle();
}

// Used to create the about window
function createAboutWindow () {
    aboutWindow = new BrowserWindow({
        width: 500,
        height: 200,
        resizable: false,
        maximizable: false,
        icon: __dirname + "/icon.png",
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    aboutWindow.setMenu(null);
    aboutWindow.loadFile("about.html");

    aboutWindow.on("closed", () => {
        aboutWindow = null;
    });

    aboutWindow.on("ready-to-show", () => aboutWindow.show());
}

// Defines the vars that will contain game data
let name;
let desc;
let img;
let idle;

// Executes when game data is recieved
ipcMain.on("game", (e, game, status) => {
    if (status === "") desc = "Online";
    else desc = status.charAt(0).toUpperCase() + status.slice(1);
    name = game;
    setRPC();
});

// Executes when idle data is recieved
ipcMain.on("idle", (e, clicks) => {
    idle = clicks
    setIdle();
});

// Executes when about data is recieved
ipcMain.on("about", () => {
    createAboutWindow();
});

// Sets the presence to idle
function setIdle() {
    if (idle === 16) return rpc.updatePresence({
        details: "Yoshi's Fucking Island", 
        state: "ccomign This Sprign", 
        largeImageKey: "yfi",
        largeImageText: "he's sitting there.."});
    rpc.updatePresence({
        details: "Home", 
        state: "Idle", 
        largeImageKey: "switch", 
        largeImageText: "Home"
    });
}

// Finds the game image and sets the presence
function setRPC() {
    for (i = 0; i < gameData.games.length; i++) {
        if (gameData.games[i].name === name) {
            img = gameData.games[i].img;
            break;
        }
    }

    rpc.updatePresence({
        details: name, 
        state: desc, 
        largeImageKey: img, 
        largeImageText: name
    });
}

// Events to listen for
app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (window === null) createWindow();
});
