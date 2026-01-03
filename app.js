const express = require('express');
const app = express();
const index = require('./routes/index.js');
const endroute = require('./routes/endroute.js');
const horaMiddleware = require('./middlewares/horaMiddleware');

app.use(horaMiddleware);

app.use('/', index);
app.use('/endroute', endroute);

app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1>');
});

app.listen(3000, () => {
  console.log('el servidor está escuchando en el puerto 3000');
});