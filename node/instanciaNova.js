//para que eu consiga retornar sempre uma nova instancia ao inves de usar o sigleton to node eu posso criar uma factory
//ela ira retornar um novo obj
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}
