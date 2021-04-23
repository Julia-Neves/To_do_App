const tarefaModel = require("../models/tarefa-model");
const TarefaDAO = require("../DAO/tarefas-dao");

function tarefaController(app, bd) {
    const tarefaDAO = new TarefaDAO(bd);

    app.get('/tarefa', async (req, res) => {
        try {
            const listarTarefas = await tarefaDAO.listaTarefas()
            res.send(listarTarefas);
          } catch (err) {
              res.status(404).send(err);
          }
    });

    app.get('/tarefa/:id', (req, res) => {
        res.send({ mensagem: `você tentou buscar a Tarefa ${req.params.id}` })
    });

    app.post('/tarefa', async (req, res) => {
        try {
            const body = req.body;
            let assignment = new tarefaModel(0, body.titulo, body.descricao, body.status, body.datacriacao, body.id_usuario);
            const inserirTarefas = await tarefaDAO.insereTarefa(assignment)
            res.send(inserirTarefas);
        } catch (err) {
            res.status(404).send(err); 
        }
});

    app.delete('/tarefa/:id', async (req, res) => {
        try {
            const email = req.params.email
            const deletarTarefas = await tarefaDAO.deletaTarefa(email)
            res.send(deletarTarefas);
        } catch (err) {
            res.status(404).send(err);
        }
    });

    //Mudar tudo junto ao alterar tarefa, para nao precisar disso seria necessario usar o patch//
    app.put('/tarefa/:id', async (req, res) =>{
        try {
            const email = req.params.email;
            const body = req.body;
            const alterarTarefas = await tarefaDAO.alteraTarefa(email, body)
            res.send(alterarTarefas);
        } catch (err) {
            res.status(404).send(err);
        }
    });
};

module.exports = tarefaController;