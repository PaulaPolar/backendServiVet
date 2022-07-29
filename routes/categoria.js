const express = require('express');
const router = express.Router();

const { list, create, remove, categoriaById} = require('../controllers/categoriaControl');

router.get('/categorias', list);
router.post('/crear', create);
router.delete("/remove/:categoriaId", remove);

router.param("categoriaId", categoriaById);

module.exports = router;