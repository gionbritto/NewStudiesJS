console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// toda funcao tem um atributo chamado prototipe
//dessa forma eu posso criar ou sobreescrever no padrao dessas funcoes, acoes com minhas necessidades assim como abaixo:
String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}
console.log('Giovanne Nascimento de Britto'.reverse()) //agr a funcao String possui um metodo chamado reverse pq eu criei

//da mesma forma com um array
Array.prototype.first = function(){
    return this[0];
}
console.log([1,2,3,4,5,6,7,8].first())