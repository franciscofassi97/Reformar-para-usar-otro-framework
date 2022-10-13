const ContenedorMongo = require("../../contenedores/ContenedorMongo");
const Mensajes = require("../../mensajes/mensajesModel");

class ContenedorMensajesMongo extends ContenedorMongo {
	constructor(schema) {
		super(schema);
	}
}

// const contenedorMensajesMongo = new ContenedorMensajesMongo(Mensajes);

module.exports = ContenedorMensajesMongo;