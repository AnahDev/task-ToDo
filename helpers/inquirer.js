const inquirer = require("inquirer");
const { validate } = require("uuid");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `1. Crear Tarea`,
      },
      {
        value: "2",
        name: "2. Listar Tareas",
      },
      {
        value: "3",
        name: "3. Listar Tareas Completadas",
      },
      {
        value: "4",
        name: "4. Listar Tareas Pendientes",
      },
      {
        value: "5",
        name: "5. Completar Tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar Tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

//funcion para mostrar el menu de opciones , esta lee el array de objetos "menuOpts"
const inquirerMenu = async () => {
  //   console.clear();
  console.log("=========================".blue);
  console.log("Seleccione una opcion:".white);
  console.log("=========================\n".blue);

  const { opcion } = await inquirer.prompt(menuOpts);

  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"enter".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
