const express = require('express');
const router = express.Router();

const validarHora = require('../middlewares/validarHora');

router.get('/', validarHora, (req, res) => {
  res.send(`
    <h1>Bienvenido a la ruta final</h1>
    <p>Estás en /endroute</p>
    <a href='/'>Volver a la página principal</a>
  `);
});

module.exports = router;
