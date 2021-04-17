module.exports = class UsuarioDAO {
    constructor(bd) {
        this.bd = bd
    }

    listaUsuarios() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM USUARIOS',
                (err, usuarios) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(usuarios)
                    }

                })
        })
    };

    insereUsuario(usuario) { 
        return new Promise((resolve, reject) => {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)'
            , [usuario.nome, usuario.email, usuario.senha]
            , (err) => {
                if (err) {
                    reject('Falha ao inserir usuario')
                } else {
                    resolve('Usuario inserido com sucesso')
                }
            })
        })
    };


    deletaUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this.bd.run('DELETE FROM USUARIOS WHERE EMAIL = (?)'
            , [usuario]
            , (err) => {
                if (err) {
                    reject('Falha ao deletar usuario')
                } else {
                    resolve('Usuario deletado com sucesso')
                }
            })

        })
    };

    // Pegando usuario todo com body como parametro,usuario como parametro filtra do usuario//
    alteraUsuario(usuario, body) {
        return new Promise((resolve, reject) => {
            this.bd.run('UPDATE USUARIOS SET NOME = (?), SENHA = (?) WHERE EMAIL = (?)' 
            , [body.nome, body.senha, usuario]
            , (err) => {
                if (err) {
                    reject('Falha ao modificar usuario')
                } else {
                    resolve('Usuario modificado com sucesso')
                }
            })


        })

    };

};






 