const soma = function(a,b){
    return a + b
}

const imprimirResultado = function(x,y, operacao = soma){
    console.log(operacao(x,y))
}

imprimirResultado(2,4)
imprimirResultado(2,4, function(x,y){
    return x * y
})

imprimirResultado(2,4, (x,y) => x-y)