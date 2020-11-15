//formas de filtrar um array
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vridro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil == false
}))

const somenteCaro = prod => prod.preco > 500
const somenteFragil  = prod => prod.fragil == true

console.log(produtos.filter(somenteFragil).filter(somenteCaro))