const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./infra/bd');
const app = express()
const port = 3000
const usuarioController = require('./controllers/usuario-controller')
const tarefaController = require('./controllers/tarefa-controller')

app.use(bodyParser.json());
app.use(logRequest);

function logRequest(req, res, next){
    console.log(req.method);
    next();
}

usuarioController(app, bd);
tarefaController(app, bd);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});