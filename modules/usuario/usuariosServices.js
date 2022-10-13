
// const { sendEmailOnRegistro } = require('../../nodemailer/nodemailer');
const {
  createUsuarioDal,
  getAllUsuariosDal,
  getUsuariosByIdDal
} = require('./usuariosDal');

const getUsurioByEmailService = async (email) => {
  const usuarios = await getAllUsuariosDal();
  const existeUsuario = usuarios.find(usuarios => usuarios.email == email);
  return existeUsuario;
};

const createUsuarioService = async (usuario) => {
  const newUsuario = await createUsuarioDal(usuario);
  // if (newUsuario) sendEmailOnRegistro();
  return newUsuario;
};

const getUsuariosByIdService = async (id) => {
  const usuario = await getUsuariosByIdDal(id);
  return usuario;
};

module.exports = {
  getUsurioByEmailService,
  createUsuarioService,
  getUsuariosByIdService
};