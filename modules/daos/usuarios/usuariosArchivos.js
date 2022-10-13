const ContenedorArchivos = require("../../contenedores/ContenedorArchivos");

class ContenedorUsuariosArchivos extends ContenedorArchivos {
  constructor(nombreArchivo) {
    super(nombreArchivo);
  }
}

// const contenedorUsuariosArchivo = new ContenedorUsuariosArchivos('Usuarios.json');

module.exports = ContenedorUsuariosArchivos;