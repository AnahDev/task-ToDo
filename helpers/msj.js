require("colors");

const showMsj = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("=========================".blue);
    console.log("Seleccione una opcion:".blue);
    console.log("=========================\n".blue);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir \n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opcion: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};
const pause = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("\nPresione ENTER para continuar: ", (opt) => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  showMsj,
  pause,
};
