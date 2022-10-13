const ContenedorMongo = require("../../contenedores/ContenedorMongo");
const Productos = require('../../productos/productosModel');

class ContenedorProductosMongo extends ContenedorMongo {
	constructor(schema) {
		super(schema);
	}
}

// const contenedorProductosMongo = new ContenedorProductosMongo(Productos);

module.exports = ContenedorProductosMongo;
