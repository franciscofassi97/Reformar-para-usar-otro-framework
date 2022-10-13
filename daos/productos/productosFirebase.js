const ContenedorFirebase = require("../../contenedores/ContenedorFirebase");

class ContenedorProductosFirebase extends ContenedorFirebase {
	constructor(nombreColeccion) {
		super(nombreColeccion);
	}
}

const contenedorProductosFirebase = new ContenedorProductosFirebase('productos');

module.exports = contenedorProductosFirebase;