const usuarioModel = require("../models/usuario-model");

function usuarioController(app, bd) {
// Rota: Usuários 
// Rota: Caminho + Verbo
// GET /usuarios

    app.get('/usuario', (req, res) => {
        const users = bd.usuarios;
        res.send(users)
    });

    app.post('/usuario', (req, res) => {
        const body = req.body;
        let usuario = new usuarioModel(body.id, body.email, body.nome);
        bd.usuarios.push(usuario)

        console.log(JSON.stringify(usuario));
        res.send(usuario)
    });
};

module.exports = usuarioController;