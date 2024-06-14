const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const resultados = {
        caras: 0,
        coroas: 0
    };

    for (let i = 0; i < 200; i++) {
        const lancamento = Math.random() < 0.5 ? 'caras' : 'coroas';
        resultados[lancamento]++;
    }

    const porcentagemCaras = (resultados.caras / 200) * 100;
    const porcentagemCoroas = (resultados.coroas / 200) * 100;

    res.render('index', {
        porcentagemCaras: porcentagemCaras.toFixed(2),
        porcentagemCoroas: porcentagemCoroas.toFixed(2)
    });
});

module.exports = router;
