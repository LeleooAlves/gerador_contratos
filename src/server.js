// Arquivo principal do servidor
const express = require('express');
const path = require('path');
const contractProcessor = require('./contract-processor');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '/')));

// Usar as rotas do processador de contratos
app.use('/api', contractProcessor);

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
