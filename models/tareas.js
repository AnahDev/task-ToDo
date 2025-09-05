const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  //getter y setter

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
      // console.log(key);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      const idx = `\n ${index + 1}.`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarCompletadasTrue(completadas = true) {
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      if (completadas) {
        if (completadoEn) {
          contador += 1;
          console.log();
          console.log(`${contador + "."} ${desc} :: ${completadoEn.green}`);
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log();
          console.log(`${contador + "."} ${desc} :: ${estado}`);
        }
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    //parra barrer los ids , si des seleciono una tarea que esta completada

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
