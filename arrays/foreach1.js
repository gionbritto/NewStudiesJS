const aprovados = ['Agatha', 'Aldo', 'Luiz', 'Rachel']

//aqui passo o callback que é chamado a cada iteração e nesse caso eu recebo no callback o 
//indice e o que eu estou percorrendo
aprovados.forEach(function(elemento, indiceElemento){
    console.log(`${indiceElemento + 1}) ${elemento}`)
})  

aprovados.forEach(elemento => console.log(elemento)); //passei somente 1 paramentro para a funcao


//criei uma funcao que recebe o parametro aprovado e imprime esse valor
// e armazenei na variavel exeibir aprovados
const exibirAprovados = aprovado => console.log(aprovado);
//pelo fato do foreach receber uma funcao como callback eu posso passar ela
aprovados.forEach(exibirAprovados);

//armazenando a funcao em uma variavel e imprimindo a partir do foreach
const exibirAprovadosNormal = function(ele, indice){
    console.log(`${indice +1} / Nome: ${ele}`)
}

//chamando...
aprovados.forEach(exibirAprovadosNormal)




