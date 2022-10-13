const definirContenedor = require('../daos')

const ContenedorMensajesFactory = require('./mensajesFactory');
const contenedor = new ContenedorMensajesFactory().createContenedor('Mensajes')


const agregarMensaje = async (mensaje) => {
  // const contenedor = await definirContenedor('Mensajes');
  const resultado = await contenedor.save(mensaje);
  return resultado;
};

const getAllMensajes = async () => {
  // const contenedor = await definirContenedor('Mensajes');
  const mensajes = await contenedor.getAllData();
  if (mensajes) return mensajes
};


const getMensajeById = async (id) => {
  // const contenedor = await definirContenedor('Mensajes');
  const mensaje = await contenedor.getById(id);
  if (mensaje) return mensaje
};

module.exports = {
  agregarMensaje,
  getAllMensajes,
  getMensajeById,
}




