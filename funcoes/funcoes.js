//criar de forma literal
function func1() { }

//armazenar uma dentro de uma variavel
const func2 = function () { }

///posso marmazenar dentro de um array uow
const array = [function(a,b){return a + b}, func1, func2]
//exemplo de execucao dessa funcao
console.log(array[0](2,3))

//armazenar em um atributo de um obj
const obj = {}
obj.falar = function(){return 'falar'}
console.log(obj.falar())

//posso tambem passar uma funcao como parametro
function run(fun){
    fun()
}

//posso retornar uma funcao como parametro
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
//executando a funcao acima (estranho
soma(1,2)(3) //
const retornoFuncSoma = soma(1,2)
retornoFuncSoma(3)


