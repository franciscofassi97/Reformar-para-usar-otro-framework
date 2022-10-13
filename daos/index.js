require("dotenv").config();
let contenedorImportar = "Archivos"

if (process.env.CONTENEDOR == "MONGO") contenedorImportar = "Mongo"
if (process.env.CONTENEDOR == "FIREBASE") contenedorImportar = "Firebase"
if (process.env.CONTENEDOR == "MEMORIA") contenedorImportar = "Memoria"

const definirContenedor = async (nombre) => {
	try {
		const contenedor = await import(`./${nombre}/${nombre}${contenedorImportar}.js`)
		return contenedor.default;
	} catch (error) {
		console.log("Error al importar contenedor ", error);
	}
}

module.exports = definirContenedor;
