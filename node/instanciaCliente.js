const contadorA = require('./instanciaUnica') //exportei la um obj do node q ele ira fazer um cache
const contatodB = require('./instanciaUnica')

const contatorC = require('./instanciaNova')() //aqui exporto uma funcao construtora e a executo
const contatorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contatodB.valor)

contatorC.inc()
contatorC.inc()
console.log(contatorC.valor, contatorD.valor)
console.log('teste')

