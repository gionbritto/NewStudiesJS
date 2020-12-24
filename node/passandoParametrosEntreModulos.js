//exporto para modules uma funcao que recebe parametros, dessa forma posso chamá-la em outro
//modulo passando parametros para essa chamada
module.exports = function(...nomes){
    return nomes.map(ele => `Saudação ${ele}`)
}