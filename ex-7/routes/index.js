const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/calcular', (req, res) => {
    const nota1 = parseFloat(req.body.nota1);
    const nota2 = parseFloat(req.body.nota2);
    const media = (nota1 + nota2) / 2;
    const aprovado = media >= 6.0;
    const imagem = aprovado ? 'aprovado.jpg' : 'reprovado.jpg';

    res.render('resultado', { media: media.toFixed(2), imagem, aprovado });
});

module.exports = router;
