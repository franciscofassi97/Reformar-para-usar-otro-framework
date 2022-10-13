// const ContenedorFactory = require('../contenedores/ContenedorFactory');

const ContenedorUsuiarosFactory = require('./usuariosFactory');

const contenedor = new ContenedorUsuiarosFactory().createContenedor('Usuarios')


const getUsuariosByIdDal = async (id) => {
  // const contenedor = await definirContenedor('Usuarios');
  const usuario = await contenedor.getById(id);
  return usuario;
};

const createUsuarioDal = async (usuario) => {
  // const contenedor = await definirContenedor('Usuarios');
  const newUser = await contenedor.save(usuario);
  return newUser;
}

const getAllUsuariosDal = async () => {
  // const contenedor = await definirContenedor('Usuarios');
  const usuarios = await contenedor.getAllData();
  return usuarios
}

module.exports = {
  getUsuariosByIdDal,
  createUsuarioDal,
  getAllUsuariosDal
};