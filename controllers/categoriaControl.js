const Categoria = require("../models/Categoria");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
  const categoria = new Categoria(req.body);
  categoria.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.list = (req, res) => {
  Categoria.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.remove = (req, res) => {
  let categoria = req.categoria;
  categoria.remove((err, deletedCategoria) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Categoria borrada",
    });
  });
};

exports.categoriaById = (req, res, next, id) => {
  Categoria.findById(id)
    .exec((err, categoria) => {
      if (err || !categoria) {
        return res.status(400).json({
          error: "Categoria no encontrada o no existe",
        });
      }
      req.categoria = categoria;
      next();
    });
};

/*exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortby = req.query.sortby ? req.query.sortby : "nombre";

  Categoria.find()
    .sort([[sortby, order]])
    .exec((err, categoria) => {
      if (err) {
        return res.status(400).json({
          error: "Categoria no encontrada",
        });
      }
      res.json(categoria);
    });
};*/
