const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const usuariosSchema = new mongoose.Schema(
  {
    email: { type: String },
    password: { type: String },
  }
);

usuariosSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

const Usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = Usuarios;
