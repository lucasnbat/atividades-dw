const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

router.post('/calcular', (req, res) => {
    const precoUnitario = parseFloat(req.body.precoUnitario);
    const quantidade = parseFloat(req.body.quantidade);
    const desconto = parseFloat(req.body.desconto);

    const precoTotal = (precoUnitario * quantidade) - desconto;

    res.render('result', { precoTotal: precoTotal.toFixed(2) });
});

module.exports = router;
