// const { CONTENEDOR } = require('../../config')
// let contenedorImportar = "Archivos"
// const connectDB = require('../../config/mongo');

// if (CONTENEDOR == "MONGO") {
// 	contenedorImportar = "Mongo"
// 	connectDB();
// }
// if (CONTENEDOR == "FIREBASE") contenedorImportar = "Firebase"
// if (CONTENEDOR == "MEMORIA") contenedorImportar = "Memoria"



// const definirContenedor = async (nombre) => {
// 	try {
// 		const contenedor = await import(`./${nombre}/${nombre}${contenedorImportar}.js`)
// 		return contenedor.default;
// 	} catch (error) {
// 		console.log("Error al importar contenedor ", error);
// 	}
// }

// module.exports = definirContenedor;
