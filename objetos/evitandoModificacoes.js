// ==> vai previnir que um objeto receba mais atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensive:', Object.isExtensible(produto))


produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


//Object.seal selar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
