const ContenedorArchivos = require("./ContenedorArchivos");
const ContenedorFirebase = require("./ContenedorFirebase");
const ContendorMongo = require('./ContenedorMongo');
const UsuariosMongo = require('../daos/usuarios/usuariosMongo')

class ContenedorFactory {

  createContenedor(tipoContenedor, nombreSchema) {
    console.log('tipo contendedor', tipoContenedor)
    console.log('nombre schema', nombreSchema)

    if (tipoContenedor === 'MONGO') return new UsuariosMongo(nombreSchema);
    if (tipoContenedor === 'FIREBASE') return new ContenedorFirebase(nombreSchema);
    if (tipoContenedor === 'ARCHIVOS') return new ContenedorArchivos(nombreSchema);
  };
};

module.exports = ContenedorFactory;