const { app, BrowserWindow, Menu, globalShortcut } = require("electron");

let mainWindow;

process.env.NODE_ENV = "developmemt";
const isDev = process.env.NODE_ENV !== "production" ? true : false;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 700,
    icon: "./assets/icons/Icon_256x256.png",
    resizable: isDev,
  });
  mainWindow.loadFile("./app/index.html");
}

function createAboutWindow() {
  aboutWindow = new BrowserWindow({
    width: 300,
    height: 300,
    icon: "./assets/icons/Icon_256x256.png",
    resizable: false,
  });
  aboutWindow.loadFile("./app/about.html");
}

const menu = [
  {
    label: app.name,
    submenu: [
      {
        label: "About",
        click: createAboutWindow,
      },
    ],
  },
  {
    role: "FileMenu",
  },
  isDev
    ? {
        label: "Developer",
        submenu: [
          {
            role: "reload",
          },
          {
            role: "forcereload",
          },
          {
            type: "separator",
          },
          {
            role: "toggledevtools",
          },
        ],
      }
    : [],
];

app.on("ready", () => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  globalShortcut.register("CmdOrCtrl+R", () => mainWindow.reload());
  isDev
    ? globalShortcut.register("F12", () => mainWindow.toggleDevTools())
    : null;

  mainWindow.on("ready", () => (mainWindow = null));
});
