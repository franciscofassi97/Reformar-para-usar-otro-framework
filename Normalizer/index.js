const normalizr = require("normalizr");

const autorSchema = new normalizr.schema.Entity("autor", {}, { idAttribute: "mail" });

const mensajesSchema = new normalizr.schema.Entity("mensajes", {
	autor: autorSchema,
});

const normalizarMensaje = (data) => {
	return normalizr.normalize(data, [mensajesSchema]);
};

module.exports = normalizarMensaje;
