const chalk = require('chalk')
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const bd = require('./infra/sqlite-db');
const port = 3000;
const usuarioController = require('./controllers/usuario-controller');
const tarefaController = require('./controllers/tarefa-controller');

app.use(cors());
app.use(bodyParser.json());
app.use(logRequest);


function logRequest(req, res, next){
    console.log(req.method);
    next();
}

//function

usuarioController(app, bd);
tarefaController(app, bd);

app.listen(port, () => {
    console.log(chalk.green('[SUCESSO]: '),`Example app listening at http://localhost:${port}`)
});