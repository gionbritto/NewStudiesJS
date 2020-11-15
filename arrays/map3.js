Array.prototype.map2 = function(callback){
    let newArr = []
    for(let i = 0; i < this.length; i++){
        newArr.push(callback(this[i]))
    }
    return newArr;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
];

let paraObjeto = json => JSON.parse(json)
let paraPreco = produto => produto.preco
let meuResultado1 = carrinho.map(paraObjeto).map(paraPreco)
let meuResultado2= carrinho.map2(paraObjeto).map2(paraPreco)
console.log(meuResultado1)
console.log(meuResultado2)