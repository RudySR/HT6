const express = require('express');
const app = express();
const usuariosRouter = require('./routes/paices');

app.use(express.json());

app.use('/paices', usuariosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});