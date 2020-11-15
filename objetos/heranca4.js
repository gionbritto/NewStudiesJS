function MeuObjeto() { } //<<== funcao construtora

//será que o proptotype do obj vai apontar para
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(typeof MeuObjeto)
console.log(typeof MeuObjeto.prototype)
console.log(typeof obj1)
console.log(typeof obj1.__proto__)

// console.log(obj1.__proto__ ===obj2.__proto__ )
// console.log(MeuObjeto.prototype ===obj2.__proto__ )

MeuObjeto.prototype.nome = 'Anonimo' //qualuqer obj criado a aprtir dessa funcao construtora tera no pai dele essa funcao
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! meu nome é ${this.nome}`)
}

console.log('/////////////')
console.log(obj1.nome)
console.log(obj1.__proto__.nome)

// obj1.falar()
// obj2.nome = 'Rafael'
// obj2.falar()