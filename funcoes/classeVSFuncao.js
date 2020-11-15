//classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Juao')
p1.falar()

//funcao factory
const criarPessoa = nome => {
    return {
        falar: () => {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p2 = criarPessoa('Mariazinha')
p2.falar()

function PessoaConstrutora(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new PessoaConstrutora('Kildare')
p3.falar()