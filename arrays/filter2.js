Array.prototype.filter2 = function(callback){
    //mas coisa q o map mas com o if da comparacao
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vridro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const somenteCaro = prod => prod.preco > 500
const somenteFragil  = prod => prod.fragil == true

console.log(produtos.filter(somenteFragil).filter(somenteCaro))