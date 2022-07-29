const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      require: true,
      maxLength: 32,
    },
    contrasena: {
      type: String,
      trim: true,
      require: true,
      maxLength: 32,
    },
    correo: {
        type: String,
        trim: true,
        require: true,
        maxLength: 50,
    },
    numero: {
        type: Number,
        trim: true,
        require: true,
        maxlength: 10,
    },
    direccion: {
        type: String,
        trim: true,
        require: true,
        maxLength: 50,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Usuario", usuarioSchema);
