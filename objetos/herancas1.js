//faz com que eu possa receber do outro obj informações do primeiro e o reuso de codigo seja possivel
//a composicao é melhor que a heranca
//cadeia de prototipos
//exemplo doido
Object.prototype.attr0 = 'Z' //não faça isso
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

// console.log(filho.attr1)
// console.log(filho.attr2)
// console.log(filho.attr3)
// console.log(filho.attr0)

const carro = {
    velAtual : 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//estabelecendo a relação
Object.setPrototypeOf(ferrari, carro) //aqui digo que ferrari é um carro (herdando)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(40)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())