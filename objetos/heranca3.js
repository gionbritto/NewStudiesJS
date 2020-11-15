//criou um obj pai, e depois disso utilizando o Object.create(), criou objs filhas com base diretamente nesse
//o obj.create tem a possibilidade de alem do paramentro de quem sera o pai. poder identigicar algumas propriedades
const pai = { nome: 'Joao', corCabelo: 'preto' }

const filha1 = Object.create(pai);
filha1.nome = 'Anna'
console.log(filha1.nome)

//agora vou criar um segundo obj tendo como base o pai, porem alterando já no create algumas propriedades:
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Blanca'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//agora imprimindo das chaves do obj para verificar quais ele possui:
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(`Propriedade da filha: ${key}`) :
    console.log(`Propriedade do pai por herança: ${key}`)
}