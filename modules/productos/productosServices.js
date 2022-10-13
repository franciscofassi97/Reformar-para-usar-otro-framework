//Logica de negocio 

const {
  agregarProducto,
  getAllProductos,
  getProductoById,
  deleteProductoById,
  updateProductoById
} = require('./productosDal')

const agregarProductoService = async (producto) => {
  const result = await agregarProducto(producto)
  return result;
};

const getAllProductosService = async () => {
  const productos = await getAllProductos()
  return productos;
};

const getProductoByIdServices = async (id) => {
  const producto = await getProductoById(id)
  return producto;
};

const delteProductoByIdService = async (id) => {
  const prodcutoEliminado = await deleteProductoById(id)
  return prodcutoEliminado;
};

const updateProductoByIdService = async (id, producto) => {
  const idProductoActualizado = await updateProductoById(id, producto);
  return idProductoActualizado;
};

module.exports = {
  agregarProductoService,
  getProductoByIdServices,
  getAllProductosService,
  delteProductoByIdService,
  updateProductoByIdService
};