const definirContenedor = require('../daos');
const normalizarMensaje = require("../Normalizer");

const { getAllProductosService, agregarProductoService } = require('../modules/productos/productosServices');
const { getAllMensajesService, agregarMensajeService } = require('../modules/mensajes/mensajesServices');
module.exports = (server) => {
	const { Server: IoServer } = require("socket.io");
	const ioSocket = new IoServer(server);

	ioSocket.on("connection", async (socket) => {
		console.log("New cliente connected");

		//Contenedores
		// const contenedorProductos = await definirContenedor("productos");
		// const contenedorMensajes = await definirContenedor("mensajes");

		//Emitit eventos de sockets para visualizacion de datos en el cliente
		const listProductos = await getAllProductosService()
		socket.emit("leerProductos", listProductos);
		socket.emit("leerMensajes", normalizarMensaje(await getAllMensajesService()));

		//Prodcutos 
		socket.on("agregarProducto", async (producto) => {
			const idProducto = await agregarProductoService(producto);
			if (idProducto) ioSocket.sockets.emit("leerProductos", await getAllProductosService());
		})

		//Chat
		socket.on("agregarMensaje", async (mensaje) => {
			const idMensaje = await agregarMensajeService(mensaje);
			const mensajesNormalizado = normalizarMensaje(await getAllMensajesService());
			if (idMensaje) ioSocket.sockets.emit("leerMensajes", mensajesNormalizado);
		})
	})
};