const express = require('express');
const router = express.Router();
const {
  formProductos,
  agregarProductoController,
  getProductosController,
  actualizarProductoByIdController,
  borrarProductoByIdController
} = require('./productosController');
const { estaAutenticado } = require('../../middleware/index');


// router.get('/', estaAutenticado, formProductos);


// POST
router.post('/', agregarProductoController);

// GET
router.get("/:id?", getProductosController);

// PUT
router.put('/:id', actualizarProductoByIdController);

// DELETE
router.delete("/:id", borrarProductoByIdController)


module.exports = router;