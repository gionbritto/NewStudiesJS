//Object.freeze isso permite q eu bloqueie a alteracao do obj
const pessoa= {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)
Object.freeze(pessoa)


pessoa.nome = 'Maria'
pessoa.end = 'av 123'
console.log(pessoa)
