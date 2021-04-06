class Tarefa{
    constructor(id, titulo, descricao, data, status, observacoes){
        this.id = id,
        this.titulo = titulo,
        this.descricao = descricao,
        this.data = data,
        this.status = status,
        this.observacoes = observacoes;
    }
}

module.exports = Tarefa;