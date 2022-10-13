const ContenedorFirebase = require("../../contenedores/ContenedorFirebase");

class ContenedorCarritoFirebase extends ContenedorFirebase {
  constructor(nombreColeccion) {
    super(nombreColeccion);
  }
}

// const contenedorCarritoFirebase = new ContenedorCarritoFirebase('Carrito');

module.exports = ContenedorCarritoFirebase;