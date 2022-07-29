const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      maxlength: 32,
      unique: true,
    },
    descripcion: {
        type: String,
        trim: true,
        require: true,
        maxLength: 32,
      },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Categoria", categoriaSchema);