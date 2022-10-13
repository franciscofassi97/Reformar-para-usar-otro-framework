const axios = require('axios');

const guardarProductoNuevo = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/productos', {
      nombre: 'Producto agregado test axios',
      precio: 'Producto agregado test axios',
      fotoUrl: 'Producto agregado test axios'
      // descripcion: 'Producto agregado test axios',
      // codigo: 'Producto agregado test axios',
      // stock: 'Producto agregado test axios'
    });
    console.log(response.data)
    console.log('status:', response.status)
    if (response.data) return response.data
  }
  catch (error) {
    console.log(error)
  }
};

const getProductoByID = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/productos/${id}`);
    console.log(response.data);
    console.log(response.config.url);
  }
  catch (error) {
    console.log(error);
  };
};


const getProductos = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/productos');
    console.log(response.data);
    console.log(response.config.url);
  }
  catch (error) {
    console.log(error);
  };
};

const actualizarProductoById = async (id) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/productos/${id}`, {
      nombre: 'Producto agregado test axios',
      fotoUrl: 'Producto ACTUALIZADO test axios',
      precio: 'Producto agregado test axios'
      // descripcion: 'Producto agregado test axios',
      // codigo: 'Producto ACTUALIZADO test axios',
      // stock: 'Producto ACTUALIZADO test axios'
    });
    console.log(response.data)
    console.log('status:', response.status)
  }
  catch (error) {
    console.log(error)
  }
};



const eliminarProductoById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/productos/${id}`);
    console.log(response.data);
    console.log(response.config.url);
  }
  catch (error) {
    console.log(error);
  };
};


const test = async () => {
  try {
    const { idProducto } = await guardarProductoNuevo();

    await getProductos().then(() => console.log("finalizado, todos los productos"));

    await getProductoByID(idProducto).then(() => console.log("finalizado, producto por id"));

    await actualizarProductoById(idProducto).then(() => console.log("finalizado , producto modificado"));

    await eliminarProductoById('6332355f5905425026655d4a').then(() => console.log("finalizado producto eliminado"));

  } catch (error) {
    console.log(error);
  };
};


test();