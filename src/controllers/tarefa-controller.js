const tarefaModel = require("../models/tarefa-model");
const TarefaDAO = require("../DAO/tarefas-dao");

function tarefaController(app, bd) {
    const tarefaDAO = new TarefaDAO(bd);

    app.get('/tarefa', (req, res) => {
        tarefaDAO.listaTarefas()
            .then((tarefa) => { res.send(tarefa) })
            .catch((err) => res.send({mensagem: "Falha ao listar tarefas"}))
    });

    app.get('/tarefa/:id', (req, res) => {
        res.send({ mensagem: `você tentou buscar a Tarefa ${req.params.id}` })
    });

    app.post('/tarefa', (req, res) => {
        const body = req.body;
        let assignment = new tarefaModel(0, body.titulo, body.descricao, body.status, body.datacriacao, body.id_usuario);
        tarefaDAO.insereTarefa(assignment)
            .then((mensagemSucesso) => res.status(201).send({ mensagem : mensagemSucesso}))
            .catch((mensagemFalha) => res.send({ mensagem: mensagemFalha}))
    });

    app.delete('/tarefa/:id', (req, res) => {
        const id = req.params.id
        const assignment = bd.tarefas
       
        for (let i = 0; i < assignment.length; i++){
            if(assignment === assignment[i].id) {
                assignment.splice(i, 1)
            }
        }
        res.send(`{"mensagem":"<${id} Tarefa deletada>"}`)
    });

    app.put('/tarefa/:id', (req, res) =>{
        const id = req.params.id;
        const assignment = bd.tarefas;

        for(let i = 0; i <assignment.length; i++){
            if(id === assignment[i].id){
            assignment[i] = req.body;
            }
        }
        res.send(`{"mensagem":"<${id} Tarefa atualizada>"}`)
    });
};

module.exports = tarefaController;