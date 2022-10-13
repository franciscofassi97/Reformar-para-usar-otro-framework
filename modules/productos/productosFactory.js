const ProductosFirebase = require('../daos/productos/productosFirebase')
const ProductosArchivos = require('../daos/productos/productosArchivos')
const ProductosMongo = require('../daos/productos/productosMongo')


const { CONTENEDOR } = require('../../config')

class ContenedorProductosFactory {

  createContenedor(nombreSchema) {
    if (CONTENEDOR === 'MONGO') {
      const Productos = require('../../modules/productos/productosModel');
      return new ProductosMongo(Productos);
    }
    if (CONTENEDOR === 'FIREBASE') return new ProductosFirebase(nombreSchema);
    if (CONTENEDOR === 'ARCHIVOS') return new ProductosArchivos(nombreSchema);
  };
};

module.exports = ContenedorProductosFactory;