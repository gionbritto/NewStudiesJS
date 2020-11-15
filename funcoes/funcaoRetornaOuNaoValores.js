// //retornos variaves
// function area(largura, altura){
//     const area = largura * altura;
//     if(area > 20){
//         console.log(`Valor acima do mermitido: ${area}m2`)
//     }else{
//         return area;
//     }
// }

// console.log(area(2,2))
// console.log(area(5,5))
// console.log(area(5))


/////////////////////////////////////////////
//parametros variaveis
// function soma() {  //o fato de nao receber nenhum parametro nao significa que nao posso receber nenhum
//     //arguments é o parametro interno que as funcoes possuem
//     let soma = 0;
//     for (i in arguments) {
//         soma += arguments[i]
//     }
//     return soma

// }

// console.log(soma())
// console.log(soma(1))
// console.log(soma(1,2,3,5))

//////////////////////////////////////////////////////
//parametro padrao
//estrategia 1
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// console.log(soma1(1,2,3))

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //esta é a mais segura
    return a + b + c
}


//valor padrao es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(1,2,3))