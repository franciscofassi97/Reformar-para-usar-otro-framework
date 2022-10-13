const ContenedorArchivos = require("../../contenedores/ContenedorArchivos");

class ContenedorProductosArchivos extends ContenedorArchivos {
	constructor(nombreArchivo) {
		super(nombreArchivo);
	}
}

const contenedorProductosArchivo = new ContenedorProductosArchivos('productos.json');

module.exports = contenedorProductosArchivo;