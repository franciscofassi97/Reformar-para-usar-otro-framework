const ContenedorMongo = require("../../contenedores/ContenedorMongo");
// const Carrito = require('../../carrito/carritoModel');

class ContenedorCarritoMongo extends ContenedorMongo {
  constructor(schema) {
    super(schema);
  }
}

// const contenedorCarritoMongo = new ContenedorCarritoMongo(Carrito);

module.exports = ContenedorCarritoMongo;