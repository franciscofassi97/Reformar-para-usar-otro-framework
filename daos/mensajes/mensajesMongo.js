const ContenedorMongo = require("../../contenedores/ContenedorMongo");
const Mensajes = require("../../models/Mensajes");

class ContenedorMensajesMongo extends ContenedorMongo {
	constructor(schema) {
		super(schema);
	}
}

const contenedorMensajesMongo = new ContenedorMensajesMongo(Mensajes);

module.exports = contenedorMensajesMongo;