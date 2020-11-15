//funcoes importantes de estao dentro de object
//Object.keys
//Object.values(pbjeto)
//Object.entries ==> array com arrays de chaves valores

const pessoa = {
    nome: 'Rebecca',
    idade: 2,
    peso: 13
}

// console.log(Object.keys(pessoa))
// console.log(Object.values(pessoa))
// // console.log(Object.entries(pessoa))

// Object.entries(pessoa).forEach(e => {
//     console.log(`${e[0]} : ${e[1]}`)
// })

// Object.entries(pessoa).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`)
// })

//////////////////////////////////////////
//eu posso dinamicamente definir uma propriedade deum obj e algumas caracteristicas
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, //listavel (posso tirar a visibilidade de listagem dela)
    writable: false, //nao pode ser altedada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))

/////////////////////////
//Oject.assign ecmaScript 2015
//posso montar um obj dinamico

const dest = { a:1}
const o1 = {b:2}
const o2 = {c: 3, a:4}

Object.assign(dest, o1, o2)

console.log(dest)