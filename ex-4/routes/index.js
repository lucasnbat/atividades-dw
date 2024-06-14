const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const dataAtual = new Date();
  res.render('index', { dataHora: dataAtual.toLocaleString() });
});

module.exports = router;
