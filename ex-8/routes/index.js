const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('form');
});

router.post('/calcular', (req, res) => {
    const {
        nome,
        sexo,
        anoNascimento,
        marca,
        modelo,
        anoFabricacao,
        valorVeiculo,
        bonus
    } = req.body;

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    let valorApolice;

    if (anoFabricacao >= 2010) {
        valorApolice = valorVeiculo * 0.0125;
    } else if (anoFabricacao >= 2000) {
        valorApolice = valorVeiculo * 0.0175;
    } else if (anoFabricacao >= 1980) {
        valorApolice = valorVeiculo * 0.02;
    } else {
        valorApolice = valorVeiculo * 0.025;
    }

    if (sexo === 'F') {
        valorApolice *= 0.9;
    } else {
        valorApolice *= 1.05;
    }

    if (idade < 30 || idade > 60) {
        valorApolice *= 1.2;
    }

    valorApolice *= (1 - bonus / 100);

    res.render('resultado', {
        nome,
        valorApolice: valorApolice.toFixed(2)
    });
});

module.exports = router;
