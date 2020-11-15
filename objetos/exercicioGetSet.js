const objSequencia = {
    _valor: 1,
    get valor() { return this._valor},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(objSequencia.valor)
objSequencia.valor = 100
console.log(objSequencia.valor)
objSequencia.valor = 50
console.log(objSequencia.valor)
