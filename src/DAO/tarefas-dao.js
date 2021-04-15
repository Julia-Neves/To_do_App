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
};