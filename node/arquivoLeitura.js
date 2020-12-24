//fazendo a importacao do FS que já é um modulo core do node para leitura de arquivos
const fs = require('fs');

const caminho = __dirname + '/arquivo.json'
//leitura de forma sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//leitura assincrona
fs.readFile(caminho, 'utf-8', (err, content) => {
    const config = JSON.parse(content) //preciso converter
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') //lendo diretamente o arquivo json
console.log(config.db)

//leitura de pasta
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})