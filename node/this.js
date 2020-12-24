//this é igual a module.exports fora de uma funcao
//porem dentro de uma funcao ele aponta para global
 function minhaFuncao(){
     this.perigo = '...' //cuidado com isso pois nesse caso eu estou colocando dentro de global
 }