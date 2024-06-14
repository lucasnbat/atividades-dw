const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

router.post('/calcular', (req, res) => {
    const tensao = parseFloat(req.body.tensao);
    const corrente = parseFloat(req.body.corrente);

    if (corrente !== 0) {
        const resistencia = tensao / corrente;
        res.render('result', { resistencia: resistencia.toFixed(2) });
    } else {
        res.render('result', { resistencia: 'Infinita (corrente não pode ser zero)' });
    }
});

module.exports = router;
