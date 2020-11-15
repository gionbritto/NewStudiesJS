const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
];

let paraObjeto = json => JSON.parse(json)
let paraPreco = produto => produto.preco
let meuResultado = carrinho.map(paraObjeto).map(paraPreco)
console.log(meuResultado)

let njson = ['{"nome": "Giovanne", "idade": 24}']
const meuMap = function(expression){
    let newArr = []
    for(let i = 0; i < this.length; i++){
        newArr.push(JSON.parse(this[i])[expression])
    }
    return newArr;
}

Array.prototype.meuMap = meuMap;

let getIdade = ele => ele['preco'];

let novoArray = carrinho.meuMap('preco');
console.log(novoArray)
