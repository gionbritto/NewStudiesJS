//forma imperativa: escrevendo passo a passo como e o que deve ser feito
const alunos = [
    { nome: 'Joao', nota: 7.8 },
    { nome: 'Maria', nota: 9.2 }
]

let total = 0
for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(`Resultado de forma imperativa: ${total/alunos.length}`)

//forma declarativa: separando cada tarefa em uma funcao bem especifica e utilizando map e reduce
let getNota = aluno => aluno.nota //pensei assim: preciso obter as notas que esta em cada obj dentro do array
let somarNota = (acumulado, atual) => acumulado + atual//pensando assim: preciso somar os valores desse array obtido anteriormente, como? utilizando reduce para sumar o val anterior e o atual (lembrando do retorno implicito)
let resultado = alunos.map(getNota).reduce(somarNota)
console.log(resultado/alunos.length)