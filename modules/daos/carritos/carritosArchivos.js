const ContenedorArchivos = require("../../contenedores/ContenedorArchivos");

class ContenedorCarritoArchivos extends ContenedorArchivos {
  constructor(nombreColeccion) {
    super(nombreColeccion);
  }
}

// const contenedorCarritoArchivos = new ContenedorCarritoArchivos('Carrito');

module.exports = ContenedorCarritoArchivos;