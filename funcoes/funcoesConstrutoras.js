//caso eu crie uma variavel let dentro da funcao/classe ela fica visivel somente ali (clarooo)
//quando usa o this dentro das funcoes construtoras eu torno essa propriedade publica
function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }   
}

//um carro padrao sem parametros, entao com valores de parametros padroes
const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

////////////////////////////////////////////////////////////////////////////////////

