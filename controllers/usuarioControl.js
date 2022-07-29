const formidable = require("formidable"); //imagen en memoria
const _ = require("lodash"); //manejo de arreglos
const fs = require("fs"); // file system, para subir archivos y leerlos
const mongoose = require("mongoose");

const Usuario = require("../models/Usuario");
const { errorHander, errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
  /*console.log(req.body.nombre);
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    //const { nombre, contrasena, correo, numero, direccion } = fields;
   let usuario = new Usuario(fields);
   usuario.save((err, result) => {
    if (err) {
      return res.status(400).json({
       error: errorHandler(error),
      });
     }
     res.json(result);
     console.log(fields.nombre);
     });
   });*/

  let usuarioNew = new Usuario({
    nombre: req.body.nombre,
    contrasena: req.body.contrasena,
    numero: req.body.numero,
    direccion: req.body.direccion,
    correo: req.body.correo,
  });
  usuarioNew.save((err, result) => {
    if (err) {
      return res.status(400).json({
       error: errorHandler(error),
      });
     }
     res.json(result);
     })
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortby = req.query.sortby ? req.query.sortby : "nombre";

  Usuario.find()
    .select("-foto")
    .sort([[sortby, order]])
    .exec((err, usuario) => {
      if (err) {
        return rs.status(400).json({
          error: "usuario no encontrado",
        });
      }
      res.json(usuario);
    });
};

exports.remove = (req, res) => {
  let usuario = req.usuario;
  usuario.remove((err, deletedUsuario) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Usuario borrado",
    });
  });
};

exports.usuarioById = (req, res, next, id) => {
  Usuario.findById(id).exec((err, usuario) => {
    if (err || !usuario) {
      return res.status(400).json({
        error: "Usuario no encontrado o no existe",
      });
    }
    req.usuario = usuario;
    next();
  });
};

exports.foto = (req, res, next) => {
  if (req.usuario.foto.data) {
    res.set("Content-Type", req.usuario.foto.contentType);
    return res.send(req.usuario.foto.data);
  }
  next();
};

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

exports.update = (req, res) => {
  //since you POST the object then use req.body
  /*let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    const { nombre, contrasena, correo, numero, direccion } = fields;
    let usuario = new Usuario(fields);
    Usuario.updateOne({ _id: req.usuario._id }, fields, (err, usuario) => {
      res.send({
        items: usuario,
      });
    });
  });*/
  /*let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    const { nombre, contrasena, correo, numero, direccion } = fields;
    let usuario = new Usuario(fields);*/

    
  let usuarioActualizado = new Usuario({
    nombre: req.body.nombre,
    contrasena: req.body.contrasena,
    numero: req.body.numero,
    direccion: req.body.direccion,
    correo: req.body.correo,
  });
  
    Usuario.updateOne({ _id: req.usuario._id }, req.body, (err, usuarioActualizado) => {
      res.send({
        items: usuarioActualizado,
      });
    });
};
