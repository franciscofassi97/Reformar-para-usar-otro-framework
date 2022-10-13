//Logica de negocio 

const {
  agregarMensaje,
  getAllMensajes,
  getMensajeById,
} = require('./MensajesDal')

const agregarMensajeService = async (Mensaje) => {
  const result = await agregarMensaje(Mensaje)
  return result;
};

const getAllMensajesService = async () => {
  const Mensajes = await getAllMensajes()
  return Mensajes;
};

const getMensajeByIdServices = async (id) => {
  const Mensaje = await getMensajeById(id)
  return Mensaje;
};


module.exports = {
  agregarMensajeService,
  getMensajeByIdServices,
  getAllMensajesService,
};