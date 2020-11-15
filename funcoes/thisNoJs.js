//funcao bind
//o this pode ser diferente de acordo com como ele é chamado
//posso criar uma funcao dentro de um obj e sem colocar function
//uma funcao tem por padrao outras funcoes dentro dela e uma delas é o bind. 
//Quando isso acontece eu informo em qual contexto quero fazer a chamada do metodo caso eu armazene ele em alguma variavel
//exemplo:
// const pessoa = {
//     saudacao: 'Ola, bom dia',
//     falar(){
//         console.log(this.saudacao)
//     }
// }
// pessoa.falar()
// const funcaoFalar = pessoa.falar
// funcaoFalar() //nessa chamada gera undefined pois o contexto no qual a funcao funcaoFalar foi chamada não reconhece o this
// //para isso irei utilizar o metodo bind que esta dentro de todas as funoes
// const falarRealDePessoa = pessoa.falar.bind(pessoa) //amarrei um obj (no caso pessoa) ao metodo
// falarRealDePessoa()


//////////////////////////////////////////////////////////////////////////////////
//momentos em q o js pode 'nao' encontrar o this
// function Pessoa(){
//     this.idade = 0
//     setInterval(function(){
//         this.idade++
//         console.log(this.idade)
//     }.bind(this),1000)
// }

function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}

new Pessoa