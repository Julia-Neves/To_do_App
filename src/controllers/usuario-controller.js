const usuarioModel = require("../models/usuario-model");
const UsuarioDAO = require("../DAO/usuarios-dao");
const request = require('supertest');

function usuarioController(app, bd) {
    const usuarioDAO = new UsuarioDAO(bd);
// Rota: Usuários 
// Rota: Caminho + Verbo
// GET /usuarios

    app.get('/usuario', (req, res) => {
        usuarioDAO.listaUsuarios()
            .then((usuario) => { res.send(usuario) })
            .catch((err) => res.send({mensagem: "Falha ao listar os usuarios"}))
    });

    app.get('/usuario/:email', (req, res) => {
        res.send({ mensagem: `você tentou buscar o Usuário chamado ${req.params.email}` })
    });

    app.post('/usuario', (req, res) => {
        const body = req.body;
        let usuario = new usuarioModel(0, body.nome, body.email, body.senha);
        usuarioDAO.insereUsuario(usuario)
            .then((mensagemSucesso) => res.status(201).send({ mensagem : mensagemSucesso}))
            .catch((mensagemFalha) => res.send({ mensagem: mensagemFalha}))
    });

    app.delete('/usuario/:email', (req, res) => {
        const email = req.params.email
        const user = bd.usuarios
       
        for (let i = 0; i < user.length; i++){
            if(email === user[i].email) {
                user.splice(i, 1)
            }
        }
        res.send(`{"mensagem":"<${email} deletado>"}`)
    });

    app.put('/usuario/:email', (req, res) =>{
        const email = req.params.email;
        const user = bd.usuarios;

        for(let i = 0; i <user.length; i++){
            if(email === user[i].email){
            user[i] = req.body;
            }
        }
        res.send(`{"mensagem":"<${email} e-mail atualizado>"}`)
    });
};

module.exports = usuarioController;