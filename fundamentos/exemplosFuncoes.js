//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b);
}

// imprimirSoma(2,3)
// imprimirSoma(2)

function soma(a, b = 0){
    return a + b;
}

// console.log(soma(2))

//armazenando funcao dentro de uma variavel

const fazerMultiplicacao = function(a, b){
    console.log(a * b)
}

fazerMultiplicacao(2,3)

//armazenando uma funcao arrow
const multiplicacao = (a,b) =>{
    return a * b;
}

console.log(multiplicacao(3,3))

const subtracao = (a,b) => a-b;
console.log('Subtr: ' + subtracao(2,3));