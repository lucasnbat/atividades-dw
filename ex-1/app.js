const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configurar body-parser para pegar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar a pasta public para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar a view engine para renderizar HTML com EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rota para servir o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// Rota para calcular a média
app.post('/calcular-media', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const num3 = parseFloat(req.body.num3);
    const num4 = parseFloat(req.body.num4);

    const media = (num1 + num2 + num3 + num4) / 4;

    res.render('result', { media: media });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
