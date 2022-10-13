const fs = require("fs");

class ContenedorArchivos {
	constructor(nombreArchivo) {
		this.nombreArchivo = nombreArchivo;
	}
	save = async (object) => {
		try {
			let arrayObject = [];
			if (fs.existsSync(this.nombreArchivo)) {
				const allData = await this.getAllData();
				const id = allData[allData.length - 1].id + 1;
				object.id = id;
				allData.push(object);
				await fs.promises.writeFile(
					this.nombreArchivo,
					JSON.stringify(allData)
				);
				return object.id;
			} else {
				object.id = 1;
				arrayObject.push(object);
				await fs.promises.writeFile(
					this.nombreArchivo,
					JSON.stringify(arrayObject)
				);
				return object.id;
			}
		} catch (error) {
			console.error(`Error al guardar el objeto: ${error.message}`);
		}
	};

	getAllData = async () => {
		try {
			let data = await fs.promises.readFile(this.nombreArchivo, "utf-8");
			if (data) return JSON.parse(data);
			else return [];
		} catch (error) {
			console.log(`Error al leer todos los objetos`);
			return [];
		}
	};

	getById = async (id) => {
		try {
			const allData = await this.getAllData();
			let objectById = allData.find((object) => object.id == id);
			if (objectById) return objectById;
			else throw new Error("No encontrado");
		} catch (error) {
			console.log(`Error al leer el objeto: ${error.message}`);
		}
	};

	deleteById = async (id) => {
		try {
			const objectToDelete = await this.getById(id);
			if (objectToDelete) {
				const allData = await this.getAllData();
				let newArrayObject = allData.filter((object) => object.id != id);
				if (allData)
					await fs.promises.writeFile(
						this.nombreArchivo,
						JSON.stringify(newArrayObject)
					);
				return objectToDelete;
			} else throw new Error("No encontrado");
		} catch (error) {
			console.log(`Error al eliminar un objeto`);
		}
	};

	deleteAll = async () => {
		try {
			await fs.promises.writeFile(this.nombreArchivo, JSON.stringify([]));
		} catch (error) {
			console.log(`Error al eliminar todos los objetos`);
		}
	};

	upDate = async (id, newObject) => {
		try {
			const allData = await this.getAllData();
			//Devuelve -1 si no lo no existe ese id
			let index = allData.findIndex((object) => object.id == id);
			if (index != -1) {
				newObject.id = parseInt(id);
				allData[index] = newObject;
				await fs.promises.writeFile(
					this.nombreArchivo,
					JSON.stringify(allData)
				);
				return newObject;
			} else throw new Error("No se encotro el objeto");
		} catch (error) {
			console.log(`Error al actualizar un objeto`);
		}
	};
}

module.exports = ContenedorArchivos;

