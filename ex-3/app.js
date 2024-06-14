const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar o EJS como motor de visualização
app.set('view engine', 'ejs');

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Middleware para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));

// Importar rotas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
