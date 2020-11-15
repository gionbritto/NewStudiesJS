// console.log('Giovanne'.toUpperCase())
// console.log(typeof (3).toString())


class darNome {
    constructor(nome) {
        this.nome = nome
    }

    imprimirNome = function(){
        console.log(this.nome);
    }
}

const obj1 = new darNome('Notebook')
const obj2 = new darNome('Pencil')

console.log(obj1)
obj1.imprimirNome()
console.log(obj2)