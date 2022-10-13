// const { estaAutenticado } = require('../../middlewares/autenticado');


const {
  agregarProductoService,
  getAllProductosService,
  getProductoByIdServices,
  delteProductoByIdService,
  updateProductoByIdService
} = require('./productosServices')

const router = require('express').Router();

const agregarProductoController = async (req, res) => {
  try {
    const { nombre, descripcion, codigo, fotoUrl, precio, stock } = req.body;
    console.log(req.body)
    const id = await agregarProductoService({
      nombre,
      descripcion,
      codigo,
      fotoUrl,
      precio,
      stock
    });

    if (id) return res.status(200).json({ idProducto: id });
    // if (id) return res.status(200).redirect('/api/productos')
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  };
};

const getProductosController = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const producto = await getProductoByIdServices(id);
      if (producto) return res.status(200).json(producto);
      // if (producto) return res.status(200).render('formProducts');
      else return res.status(404).json({ message: "No se encontro el producto" });

    } else {
      const productos = await getAllProductosService();
      if (productos) return res.status(200).json(productos);
      // if (productos) return res.status(200).render('formProducts', { products: productos });

      else return res.status(404).json({ message: "No se encontraron productos" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  };
};

const actualizarProductoByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, descripcion, codigo, fotoUrl, precio, stock } = req.body;

    if (id) {
      const idProductoActualizado = await updateProductoByIdService(
        id,
        {
          nombre,
          descripcion,
          codigo,
          fotoUrl,
          precio,
          stock
        });

      if (idProductoActualizado) return res.status(200).json(id);
      else return res.status(404).json({ message: "No se encontro el producto" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  };
};




const borrarProductoByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const productoEliminado = await delteProductoByIdService(id);
      if (productoEliminado) return res.status(200).json(productoEliminado);
      else return res.status(404).json({ message: "No se encontro el producto" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  };
};



// Vistas

// router.get('/', estaAutenticado, (req, res) => {
//   const { email } = req.user
//   res.render('formProducts', { nombreUsuario: email });
// });

// module.exports = router;

module.exports = {
  agregarProductoController,
  getProductosController,
  actualizarProductoByIdController,
  borrarProductoByIdController
};