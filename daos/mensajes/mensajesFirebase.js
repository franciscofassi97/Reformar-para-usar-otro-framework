const ContenedorFirebase = require("../../contenedores/ContenedorFirebase");

class ContenedorMensajesFirebase extends ContenedorFirebase {
	constructor(nombreColeccion) {
		super(nombreColeccion);
	}
}

const contenedorMensajesFirebase = new ContenedorMensajesFirebase('mensajes');

module.exports = contenedorMensajesFirebase;