// const fabricantes = ["Mercedes", "Audi", "BMW"]

// function imprimir(nome, indice){
//     console.log(`${indice + 1}, ${nome}`)
// }

// fabricantes.forEach(imprimir)
// fabricantes.forEach(fabricante => console.log(fabricante))


const notas = [6.7, 7.2, 5.5, 8.3, 3.4, 9.0];
//formas de obter dados atraves dos callbacks e anonimas
//exemplo normal:
let notasAbaixo = []

for(i in notas){
    if(notas[i] < 7){
        notasAbaixo.push(notas[i])
    }
}
console.log(notasAbaixo)

let notasAbaixoComCallback = []

notasAbaixoComCallback = notas.filter(function(nota){
    return nota < 7
})

console.log(notasAbaixoComCallback)

let notasAbaixoComArrowFunction = []
notasAbaixoComArrowFunction = notas.filter(nota => nota < 7)
console.log(notasAbaixoComArrowFunction)