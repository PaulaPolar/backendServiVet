const express = require("express");
const router = express.Router();

const {
  list,
  create,
  remove,
  productoById,
  foto,
} = require("../controllers/productoControl");

router.get("/productos", list);
router.post("/crear", create);
router.get("/photo/:productoId", foto);

router.delete("/remove/:productoId", remove);

router.param("productoId", productoById);

module.exports = router;