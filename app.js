require("colors");
// const { showMsj, pause } = require("./helpers/msj");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas.js");

// console.clear();

const main = async () => {
  // console.log("Hola Mundo");

  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    //cargar tareas
    tareas.cargarTareasFromArray(tareasDB);
  }

  // await pausa();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1": //crear tarea
        const desc = await leerInput("Descripcion: ");
        // console.log(desc);
        tareas.crearTarea(desc);
        break;
      case "2":
        // console.log(tareas.listadoArr);
        tareas.listadoCompleto();
        break;
      case "3": //listar tareas completadas
        tareas.listarCompletadasTrue(true);
        break;
      case "4": //listar tareas pendientes
        tareas.listarCompletadasTrue(false);

        break;
      case "5": //completar tarea
        break;
      case "6": //borrar tarea
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
