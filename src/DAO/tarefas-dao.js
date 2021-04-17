module.exports = class TarefaDAO {
    constructor(bd) {
        this.bd = bd
    }

    listaTarefas() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM TAREFAS',
                (err, tarefas) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(tarefas)
                    }

                })
        })
    };

    insereTarefa(tarefa) { 
        return new Promise((resolve, reject) => {
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)'
            , [tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.datacriacao, tarefa.id_usuario]
            , (err) => {
                if (err) {
                    reject('Falha ao inserir tarefa')
                } else {
                    resolve('Tarefa inserida com sucesso')
                }
            })
        })
    }

    deletaTarefa(tarefa) {
        return new Promise((resolve, reject) => {
            this.bd.run('DELETE FROM TAREFAS WHERE ID = (?)'
            , [tarefa]
            , (err) => {
                if (err) {
                    reject('Falha ao deletar tarefa')
                } else {
                    resolve('Tarefa deletada com sucesso')
                }
            })

        })
    };

    alteraTarefa(tarefa, body) {
        return new Promise((resolve, reject) => {
            this.bd.run('UPDATE TAREFAS SET TITULO = (?), DESCRICAO = (?), STATUS = (?), DATACRIACAO = (?), ID_USUARIO = (?) WHERE ID = (?)' 
            , [body.titulo, body.descricao, body.status, body.datacriacao, body.id_usuario, tarefa]
            , (err) => {
                if (err) {
                    reject('Falha ao modificar tarefa')
                } else {
                    resolve('tarefa modificada com sucesso')
                }
            })


        })

    };

};