const express = require('express');
const consign = require('consign');

const app = express();

app.use(express.static(__dirname + '/public'));

consign()
    .include('config/middlewares.js')
    .then('routes')
    .into(app);

app.use('*', (req, res) => {
    res.status(404).json({ msg: `rota ${req.originalUrl} não existe!` });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Internal server error' });
});

app.listen(app.get('port'), () =>
    console.log(`Servidor rodando na porta ${app.get('port')}`));