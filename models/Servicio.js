const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const servicioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      require: true,
      maxLength: 32,
    },
    horario: {
        type: String,
        trim: true,
        require: true,
        maxLength: 32,
      },
    descripcion: {
      type: String,
      trim: true,
      require: true,
      maxLength: 100,
    },
    precio: {
      type: Number,
      trim: true,
      require: true,
      maxlength: 32,
    },
    categoria: {
      type: ObjectId,
      ref: "Categoria",
      require: true,
    },
    foto: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Servicio", servicioSchema);
