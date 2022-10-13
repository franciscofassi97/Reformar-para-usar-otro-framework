const ContenedorMongo = require("../../contenedores/ContenedorMongo");


class ContenedorUsuriosMongo extends ContenedorMongo {
  constructor(schema) {
    super(schema);
  }
}

// const contenedorUsuarioMongo = new ContenedorUsuriosMongo(Usuarios);

module.exports = ContenedorUsuriosMongo;