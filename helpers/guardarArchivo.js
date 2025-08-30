const fs = require("fs");

const archivo = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  //si no existe el archivo retorno null
  if (!fs.existsSync(archivo)) {
    return null;
  }

  const info = fs.readFileSync(archivo, { encoding: "utf-8" });

  const data = JSON.parse(info);
  // console.log(data);

  return data;
};

//para exportarlo como un modulo

module.exports = {
  guardarDB,
  leerDB,
};
