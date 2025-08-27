require("colors");
// const { showMsj, pause } = require("./helpers/msj");

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas.js");

// console.clear();

const main = async () => {
  // console.log("Hola Mundo");

  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1": //crear tarea
        const desc = await leerInput("Descripcion: ");
        // console.log(desc);
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;
      case "3": //listar tareas completadas
        break;
      case "4": //listar tareas pendientes
        break;
      case "5": //completar tarea
        break;
      case "6": //borrar tarea
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
