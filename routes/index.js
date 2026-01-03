
const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje || '';
  res.send(`
    <h1>Bienvenidos</h1>
    <p>Hora actual: ${req.hora}:00</p>
    <p style="color:red">${mensaje}</p>
    <a href="/endroute">Ir a la ruta final</a>
    `);
});

module.exports = router;



