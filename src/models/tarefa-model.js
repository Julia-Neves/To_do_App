class Tarefa{
    constructor(id, titulo, descricao, status, datacriacao, id_usuario){
        this.id = id,
        this.titulo = titulo,
        this.descricao = descricao,
        this.status = status,
        this.datacriacao = datacriacao,
        this.id_usuario = id_usuario
       
    }
}

module.exports = Tarefa;