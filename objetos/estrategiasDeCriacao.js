//formas de se criar objetos
//1 - usando a notacao literal

const obj1 = {
    nome: 'Giovanne',
    idade: 34
}

console.log(obj1)
//object
const obj2 = new Object

//funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome //o this significa publico ja o preco e o desc está privado
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2245.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funcao factory - cria um bojeto com base no retorno dessa funcao
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}

const f1 = criarFuncionario('Giovanne', 4000, 2)
console.log(f1.getSalario())
console.log(JSON.stringify(f1))
