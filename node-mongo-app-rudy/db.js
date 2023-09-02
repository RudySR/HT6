const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/umg', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a MongoDB establecida');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

module.exports = mongoose;