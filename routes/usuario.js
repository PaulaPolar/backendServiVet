const express = require("express");
const router = express.Router();

const {
  list,
  create,
  remove,
  usuarioById,
  foto,
  update,
} = require("../controllers/usuarioControl");

router.get("/usuarios", list);
router.post("/crear", create);
router.get("/photo/:id", foto);

router.delete("/remove/:usuarioId", remove);
router.put("/update/:usuarioId", update);

router.param("usuarioId", usuarioById);

module.exports = router;
