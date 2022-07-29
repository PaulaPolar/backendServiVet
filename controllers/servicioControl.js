const formidable = require("formidable"); //imagen en memoria
const _ = require("lodash"); //manejo de arreglos
const fs = require("fs"); // file system, para subir archivos y leerlos

const Servicio = require("../models/Servicio");
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
    const { nombre, horario, descripcion, precio, categoria } = fields;
    let servicio = new Servicio(fields);

    if (files.foto) {
      if (files.foto.size > 1000000) {
        return res.status(400).json({
          error: "Imagen muy pesada, menos de un 1MB",
        });
      }
      servicio.foto.data = fs.readFileSync(files.foto.filepath);
      servicio.foto.contentType = files.foto.type;
    }

    servicio.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(result);
    });
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortby = req.query.sortby ? req.query.sortby : "nombre";

  Servicio.find()
    .select("-foto")
    .populate("categoria")
    .sort([[sortby, order]])
    .exec((err, servicio) => {
      if (err) {
        return res.status(400).json({
          error: "Servicio no encontrado",
        });
      }
      res.json(servicio);
    });
};

exports.remove = (req, res) => {
  let servicio = req.servicio;
  servicio.remove((err, deletedServicio) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Servicio borrado",
    });
  });
};

exports.servicioById = (req, res, next, id) => {
  Servicio.findById(id)
    .populate("categoria")
    .exec((err, servicio) => {
      if (err || !servicio) {
        return res.status(400).json({
          error: "Servicio no encontrado o no existe",
        });
      }
      req.servicio = servicio;
      next();
    });
};

exports.foto = (req, res, next) => {
  if (req.servicio.foto.data) {
    res.set("Content-Type", req.servicio.foto.contentType);
    return res.send(req.servicio.foto.data);
  }
  next();
};
