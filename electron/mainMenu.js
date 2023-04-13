const { app, Menu } = require("electron");

const setMainMenu = () => {
  const template = [
    {
      label: "Archivo",
      submenu: [
        {
          label: "Registrar animal",
          click: () => {
            console.log("Registrar animal");
          },
        },
        {
          label: "Nueva consulta",
          click: () => {
            console.log("Nueva consulta");
          },
        },
        {
          label: "Nueva cita",
          click: () => {
            console.log("Nueva cita");
          },
        },
        { type: "separator" },
        {
          label: "Salir",
          click: () => {
            app.quit();
          },
        },
      ],
    },
    {
      label: "Ver",
      submenu: [
        {
          label: "Registro de animales",
          click: () => {
            console.log("Registro de animales");
          },
        },
        {
          label: "Citas pendientes",
          click: () => {
            console.log("Citas pendientes");
          },
        },
        { type: "separator" },
        {
          label: "Estadisticas",
          click: () => {
            console.log("Estadisticas");
          },
        },
        { type: "separator" },
        { role: "toggleDevTools" },
      ],
    },
    {
      label: "Herramientas",
      submenu: [
        {
          label: "Configuracion",
          submenu: [
            {
              label: "n1",
            },
            {
              label: "n2",
            },
            {
              label: "n3",
            },
            {
              label: "n4",
            },
          ],
        },
        { role: "reload" },
        { role: "forceReload" },
        {
          label: "Cuenta",
          click: () => {
            console.log("Cuenta");
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

module.exports = {
  setMainMenu,
};
