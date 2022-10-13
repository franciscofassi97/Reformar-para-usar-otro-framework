const ContenedorArchivos = require("../../contenedores/ContenedorArchivos");

class ContenedorMensajesArchivos extends ContenedorArchivos {
	constructor(nombreArchivo) {
		super(nombreArchivo);
	}
}

// const contenedorMensajesArchivo = new ContenedorMensajesArchivos('mensajes.json');

module.exports = ContenedorMensajesArchivos;