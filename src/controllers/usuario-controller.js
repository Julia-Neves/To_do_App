const usuarioModel = require("../models/usuario-model");
const UsuarioDAO = require("../DAO/usuarios-dao");
const request = require('supertest');

function usuarioController(app, bd) {
    const usuarioDAO = new UsuarioDAO(bd);
// Rota: Usuários 
// Rota: Caminho + Verbo
// GET /usuarios

    app.get('/usuario', async (req, res) => {
        try {
          const listarUsuarios = await usuarioDAO.listaUsuarios()
          res.send(listarUsuarios);
        } catch (err) {
            res.status(404).send(err);
        }
    });

    app.get('/usuario/:email', (req, res) => {
        res.send({ mensagem: `você tentou buscar o Usuário chamado ${req.params.email}` })
    });

    app.post('/usuario', async (req, res) => {
        try {
            const body = req.body;
            let usuario = new usuarioModel(0, body.nome, body.email, body.senha);
            const inserirUsuarios = await usuarioDAO.insereUsuario(usuario)
            res.send(inserirUsuarios);
          } catch (err) {
              res.status(404).send(err); 
          }
    });

    app.delete('/usuario/:email', async (req, res) => {
        try {
            const email = req.params.email
            const deletarUsuarios = await usuarioDAO.deletaUsuario(email)
            res.send(deletarUsuarios);
        } catch (err) {
            res.status(404).send(err);
        }
    });
 
    //Mudar a senha junto ao alterar nome// Teria que usar patch para nao ter que fazer isso//
    app.put('/usuario/:email', async (req, res) =>{
        try {
            const email = req.params.email;
            const body = req.body;
            const alterarUsuarios = await usuarioDAO.alteraUsuario(email, body)
            res.send(alterarUsuarios);
        } catch (err) {
            res.status(404).send(err);
        }
    });
};

module.exports = usuarioController;