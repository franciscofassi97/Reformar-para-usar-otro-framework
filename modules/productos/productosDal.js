const definirContenedor = require('../daos')

const ContenedorProductosFactory = require('./productosFactory');
const contenedor = new ContenedorProductosFactory().createContenedor('Productos')

const agregarProducto = async (producto) => {
  // const contenedor = await definirContenedor('Productos');
  const resultado = await contenedor.save(producto);
  return resultado;
};

const getAllProductos = async () => {
  // const contenedor = await definirContenedor('Productos');
  const productos = await contenedor.getAllData();
  if (productos) return productos
};


const getProductoById = async (id) => {
  // const contenedor = await definirContenedor('Productos');
  const producto = await contenedor.getById(id);
  if (producto) return producto
};

const deleteProductoById = async (id) => {
  // const contenedor = await definirContenedor('Productos');
  const productoEliminar = await contenedor.getById(id);
  if (productoEliminar) {
    const productoElimininado = await contenedor.deleteById(id)
    return productoElimininado;
  } else throw new Error('No se econtro el producto');
};


const updateProductoById = async (id, producto) => {
  // const contenedor = await definirContenedor('Productos');

  const productoActualizar = await contenedor.getById(id);
  if (!productoActualizar) throw new Error('No se econtro el producto');

  const productoActualizado = {
    id: productoActualizar.id,
    nombre: producto.nombre || productoActualizar.nombre,
    descripcion: producto.descripcion || productoActualizar.descripcion,
    codigo: producto.codigo || productoActualizar.codigo,
    fotoUrl: producto.fotoUrl || productoActualizar.fotoUrl,
    precio: producto.precio || productoActualizar.precio,
    stock: producto.stock || productoActualizar.stock
  };
  const idProductoActualizar = await contenedor.upDate(id, productoActualizado)

  return idProductoActualizar
};


module.exports = {
  agregarProducto,
  getAllProductos,
  getProductoById,
  deleteProductoById,
  updateProductoById
}




