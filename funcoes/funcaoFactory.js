//factory uma funcao que sempre irá retornar um novo obj
// function criarPessoa(){
//     return{
//         nome : 'Ana',
//         preco: 35
//     }
// }

// console.log(criarPessoa())

function criarProduto(nome = 'Produto x', preco = 45){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.10
    }
}

console.log(criarProduto('Lápis', 2))