const connectDB = require('../../config/mongo');
connectDB()
class ContenedorMongo {

  constructor(schema) {
    this.schema = schema;
  }
  save = async (objecto) => {
    try {
      const objectoSaved = await this.schema(objecto).save();
      return objectoSaved._id;
    } catch (error) {
      console.log("Error saving to DB", error);
    }
  }

  getAllData = async () => {
    try {
      const objetos = await this.schema.find();
      if (objetos) return objetos;
      else throw new Error("No encontrado");
    } catch (error) {
      console.log("Error Al buscar");
    }
  }

  getById = async (id) => {
    try {
      const objectoById = await this.schema.findById(id);
      if (objectoById) return objectoById;
      else throw new Error("No encontrado");
    } catch (error) {
      console.log("Error Al buscar ");
    }
  }

  deleteById = async (id) => {
    try {
      const objectoById = await this.schema.findByIdAndDelete(id);
      return objectoById;
    } catch (error) {
      console.log("Error al eliminar");
    }
  }

  upDate = async (id, objeto) => {
    try {
      const objectoById = await this.schema.findByIdAndUpdate(id, objeto);
      return objectoById;
    } catch (error) {
      console.log("Error al actualizar");
    }
  }
}

module.exports = ContenedorMongo;