//files.coder.com.br/curso-js/funcionarios.json
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios'); //client http


const somenteChina = ele => ele.pais.toUpperCase() == 'CHINA';//chineses
const somenteMulher = ele => ele.genero.toUpperCase() == 'F';//mulher
const menorSalario = (a,v) => a.salario < v.salario ? a : v;//menor salario

axios.get(url).then(response => {
    const funcionarios = response.data;    
 //   let result = funcionarios.map(pais);
   // console.log(result);
    let result1 = funcionarios.filter(somenteChina).filter(somenteMulher);
    let final = result1.reduce(menorSalario);
    // let finalResult = result1.reduce(function(aculumador, valor){
    //     return aculumador.salario < valor.salario ? aculumador : valor
    // })
    console.log(final)
})


function obterFuncionario(data, nation, gender, salary){
    
}
