const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const resultados = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };

    for (let i = 0; i < 50; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        resultados[roll]++;
    }

    res.render('index', { resultados });
});

module.exports = router;
