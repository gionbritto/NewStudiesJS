//o reduce faz o trabalho de receber o valor atual do array no index e tbm o valor anterior a ele (somente na primeira chamada)
//depois disso (a partir do segundo indice o valor acumulado será o retorno da callback na passada anterior)
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

let resultadoNota = alunos.map(a => a.nota)
let resultadoBolsa = alunos.map(a => a.bolsista)
let todosBolsistas = (resultado, bolsista) => resultado && bolsista;
// let resultadoReduce1 = resultadoNota.reduce(function(acumulador, valorAtual){
//     console.log(acumulador, valorAtual)
//     return acumulador + valorAtual
// })


let reBolsa1 = resultadoBolsa.reduce(function(acumulado, atual){    
    return acumulado  &&  atual;
})

let reBolsa11 = resultadoBolsa.reduce(todosBolsistas);


let reBolsa2 = resultadoBolsa.reduce(function(acul, atu){
    return acul || atu
})
console.log(reBolsa1)
console.log(reBolsa11)
console.log(reBolsa2)

//todos sao bosistas?
//algum é bolsista?

// console.log(resultadoNota)
// console.log(resultadoBolsa)
// console.log(resultadoReduce1)