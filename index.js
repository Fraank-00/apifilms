const express = require('express');
const bodyParser = require('body-parser');
const { DBTest } = require('./db.js');
const apiRouter = require('./routes/api.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',apiRouter);

DBTest();

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
