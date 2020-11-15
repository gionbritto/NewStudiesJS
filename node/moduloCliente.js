//a classe cliente usa outros modulos q vou criar
const moduloA = require('./moduloA') //importando usando um caminho relativo
const moduloB = require('./moduloB') //associei o que foi exportado do modulo aqui nessa constante

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA) // ==> aqui podenos ver que ele imprime um obj, tanto o this, exports e o modulo.exports são um obj

//ja no objB eu substituo todo o obj
console.log(moduloB.boaNoite())