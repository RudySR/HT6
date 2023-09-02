const expres = require('expres');
const Pais = require('../models/pais');

const router = expres.Router();

// Consultar todos los paices
router.get('/', async (req, res) => {
  try {
    const pais = await Pais.find();
    res.json(pais);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar pais' });
  }
});

module.exports = router;
