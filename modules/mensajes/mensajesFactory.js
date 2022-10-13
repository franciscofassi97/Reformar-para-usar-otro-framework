const MensajesFirebase = require('../daos/Mensajes/MensajesFirebase')
const MensajesArchivos = require('../daos/Mensajes/MensajesArchivos')
const MensajesMongo = require('../daos/Mensajes/MensajesMongo')

const { CONTENEDOR } = require('../../config')

class ContenedorMensajesFactory {

  createContenedor(nombreSchema) {
    if (CONTENEDOR === 'MONGO') {
      const Mensajes = require('../../modules/mensajes/mensajesModel');
      return new MensajesMongo(Mensajes);
    }
    if (CONTENEDOR === 'FIREBASE') return new MensajesFirebase(nombreSchema);
    if (CONTENEDOR === 'ARCHIVOS') return new MensajesArchivos(nombreSchema);
  };
};

module.exports = ContenedorMensajesFactory;