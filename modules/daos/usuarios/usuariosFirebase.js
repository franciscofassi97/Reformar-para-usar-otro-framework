const ContenedorFirebase = require("../../contenedores/ContenedorFirebase");

class ContenedorUsuariosFirebase extends ContenedorFirebase {
  constructor(nombreColeccion) {
    super(nombreColeccion);
  }
}

// const contenedorUsuariosFirebase = new ContenedorUsuariosFirebase('usuarios');

module.exports = ContenedorUsuariosFirebase;