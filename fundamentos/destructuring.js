// //operador de desestruturacao. Uma estrutura é um obj, dessa forma eu consigo extrair as informações deles
// //posso usaar como obj usando chaves
// // e no ambito de um array é usado colchetes

// // /novo recurso

// const pessoa = {
//     nome: 'Ana',
//     idade: 5,
//     endereco: {
//         log: 'Rua Ercilia Rocha franco n 108',
//         num: 7823478,
//     }
// }

// //fazendo a desestruturacao
// const { nome, idade } = pessoa//a partir disso ey tenho duas variaveis disponiveis para eu trabalhar
// const { nome: n, idade: i } = pessoa//aqui eu criei umnome para uma variavel onde eu coloquei a informacao
// console.log(n, i);
// const { sobrnome, maioridade = true } = pessoa//por padrao eu coloco o valor true na desestruturacao caso ele nao exista
// const { endereco: { log, num } } = pessoa
// console.log(sobrnome, maioridade);
// console.log(log, num);
// //////////////////////////////////////////////////////////////////////////////////////////////
//usando um array
//  const [array1] = [10] //criei uma variavel arra1 que possui somente 1 posicao

//  //pegando array dentro de array e desestruturando para pegar
//  const [, [, nota]] = [[,8,8], [9,6,8]]
//  console.log(nota)
// //////////////////////////////////////////////////////////////////////////////////////////////
//usando no ambito de funcoes
function rand({ min = 0, max = 1000 }) { //neste eemplo vou receber um objeto e quando eu receer ja vou fazer a desestruturacao para retirar o min e mas, dessa forma eu nao preciso de fazer a.min e a.max
    const valor = Math.random() + (max - min) + min
    return Math.floor(valor);
}

