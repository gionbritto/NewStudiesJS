//ele nao varia o this de acordo com o contexto que é chamado

// function Pessoa(){
//     this.idade = 0

//     setInterval(() =>{
//         this.idade++
//         console.log(this.idade)
//     }, 1000)
// }

// new Pessoa

/////////////////////////////////////////////////////
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(this)
comparaComThis(global)

comparaComThis = param => console.log(this === param)


//o module.exports é o arquivo atual onde o node trata todo arquivo criado com um modulo
comparaComThis(module.exports)
comparaComThis(global)

//teste com o bind de um obj criado
const obj = {}

comparaComThis.bind(obj)
