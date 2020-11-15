let aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.push('Abia') //insere na primeira posição
aprovados.push('Rachel')
aprovados[9] = 'Rafael' //possibilidade de inserir em uma posicao especifica do array
// console.log(aprovados.length)
// console.log(aprovados)

//funcoes
aprovados.sort() //ordena o array
// console.log(aprovados)

//delete aprovados[1] //excluo a info no indice especificado
// console.log(aprovados)

//splice serve para adicionar, remover ou remover e adicionar ao mesmo tempo
aprovados.splice(1,1)
// console.log(aprovados)

let novoArray = ['Giovanne', 'Giselle', 'Maria José'];
console.log(novoArray);

novoArray.shift(); //remove da primeira posição no array
console.log(novoArray);

novoArray.unshift('Yumi'); //insere um valor no array na primeira linha
console.log(novoArray);

novoArray.splice(2, 0, 'Pessoa 1', 'Pessoa 2');
console.log(novoArray);

let algumasPessoas = novoArray.slice(2,3); //cria um novo array com base no indice que eu passo
console.log(algumasPessoas);