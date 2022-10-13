const UsuariosFirebase = require('../daos/usuarios/usuariosFirebase')
const UsuariosArchivos = require('../daos/usuarios/usuariosArchivos')
const UsuariosMongo = require('../daos/usuarios/usuariosMongo')

const { CONTENEDOR } = require('../../config')


class ContenedorUsuariosFactory {

  createContenedor(nombreSchema) {
    if (CONTENEDOR === 'MONGO') {
      const Usuario = require('../../modules/usuario/usuariosModel');
      return new UsuariosMongo(Usuario);
    }
    if (CONTENEDOR === 'FIREBASE') return new UsuariosFirebase(nombreSchema);
    if (CONTENEDOR === 'ARCHIVOS') return new UsuariosArchivos(nombreSchema);
  };
};

module.exports = ContenedorUsuariosFactory;