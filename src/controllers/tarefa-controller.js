const tarefaModel = require("../models/tarefa-model");


function tarefaController(app, bd) {

    app.get('/tarefa', (req, res) => {
        const assignment = bd.tarefas;
        res.send(assignment)
    });

    app.post('/tarefa', (req, res) => {
        const body = req.body;
        let tarefa = new tarefaModel(body.id, body.titulo, body.descricao, body.data, body.status, body.observacoes);
        bd.tarefas.push(tarefa)

        console.log(JSON.stringify(tarefa));
        res.send(tarefa)
    })
};

module.exports = tarefaController;