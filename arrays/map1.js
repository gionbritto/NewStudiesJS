//o map transforma um array em outro do mesmo tamanho
const nums = [1, 2, 3, 4, 5]

//ele é um for com proposito
let resultado = nums.map(function (e) { // neste caso estou transformando em um array todos os elementos dobrados
    return e * 2
}) //pode receber 3 parametros

console.log(resultado)

//funcao para somar 10
const soma10 = e => e + 10 // return implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)