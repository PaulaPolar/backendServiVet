const express = require("express");
const router = express.Router();

const {
  list,
  create,
  remove,
  servicioById,
  foto,
} = require("../controllers/servicioControl");

router.get("/servicios", list);
router.post("/crear", create);
router.get("/photo/:servicioId", foto);

router.delete("/remove/:servicioId", remove);

router.param("servicioId", servicioById);

module.exports = router;