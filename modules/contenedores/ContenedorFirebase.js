var admin = require("firebase-admin");

var serviceAccount = require("../../config/ecomercecoderhouse-f2abfb421581.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://ecomercecoderhouse.firebaseio.com"
});

class ContenedorFirebase {

	constructor(nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
	}

	db = admin.firestore();
	query = () => { return this.db.collection(this.nombreColeccion) };

	save = async (objecto) => {
		try {
			const query = this.query();
			const doc = query.doc();
			await doc.create(objecto)
			return doc.id;

		} catch (error) {
			console.log("Error saving to DB", error);
		}
	}

	getAllData = async () => {
		try {
			const query = this.query();
			const querySnapshot = await query.get();

			const tempDoc = querySnapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() }
			})
			return tempDoc

		} catch (error) {
			console.log("Error Al buscar");
		}
	}

	getById = async (id) => {
		try {
			const query = this.query();
			const doc = query.doc(id);
			const item = await doc.get();
			if (item.exists) {
				const data = { id: item.id, ...item.data() };
				return data;
			} else throw new Error("No encontrado");
		} catch (error) {
			console.log("Error Al buscar ");
		}
	}

	deleteById = async (id) => {
		try {
			const query = this.query();
			const doc = await query.doc(id).delete();
			return doc;
		} catch (error) {
			console.log("Error al eliminar");
		}
	}

	upDate = async (id, objeto) => {
		try {
			const query = this.query();
			const doc = await query.doc(id);
			const docUpdate = await doc.update(objeto);
			if (docUpdate) return docUpdate;
			else throw new Error("No fue posible actualizar");
		} catch (error) {
			console.log("Error al actualizar");
		}
	}
}

module.exports = ContenedorFirebase;

