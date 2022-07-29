const formidable = require("formidable"); //imagen en memoria
const _ = require("lodash"); //manejo de arreglos
const fs = require("fs"); // file system, para subir archivos y leerlos

const Producto = require("../models/Producto");
const { errorHander, errorHandler } = require("../helpers/dberrorHandler");
exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Imagen no cargada",
      });
    }
    0;
    const { nombre, descripcion, precio, categoria, cantidad } = fields;
    let producto = new Producto(fields);

    if (files.foto) {
      if (files.foto.size > 1000000) {
        return res.status(400).json({
          error: "Imagen muy pesada, menos de un 1MB",
        });
      }
      producto.foto.data = fs.readFileSync(files.foto.filepath);
      producto.foto.contentType = files.foto.type;
    }

    producto.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }
      res.json(result);
    });
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortby = req.query.sortby ? req.query.sortby : "nombre";

  Producto.find()
    .select("-foto")
    .populate("categoria")
    .sort([[sortby, order]])
    .exec((err, producto) => {
      if (err) {
        return rs.status(400).json({
          error: "Producto no encontrado",
        });
      }
      res.json(producto);
    });
};

exports.remove = (req, res) => {
  let producto = req.producto;
  producto.remove((err, deletedProducto) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Producto borrado",
    });
  });
};

exports.productoById = (req, res, next, id) => {
  Producto.findById(id)
    .populate("categoria")
    .exec((err, producto) => {
      if (err || !producto) {
        return res.status(400).json({
          error: "Producto no encontrado o no existe",
        });
      }
      req.producto = producto;
      next();
    });
};

exports.foto = (req, res, next) => {
  if (req.producto.foto.data) {
    res.set("Content-Type", req.producto.foto.contentType);
    return res.send(req.producto.foto.data);
  }
  next();
};
