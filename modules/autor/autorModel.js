const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema(
  {
    nombre: { type: String },
    apellido: { type: String },
    edad: { type: String },
    alias: { type: String },
    avatar: { type: String },
    mail: { type: String },
  });

module.exports = autorSchema;