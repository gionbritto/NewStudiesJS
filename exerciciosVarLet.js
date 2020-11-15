//var
// { { { var sera = 'Sera??' } } }
//a variavel var tanto dentro quanto fora dos blocos sao visiveis, mas dentro de uma funcao fica só lá
// console.log(sera)

//variavel ou é global ou no escopo de funcao


//var dentro de loop
// for(var i = 0; i < 10 ; i++){
//     console.log(i);
// }

//ele ainda existira fora do bloco
// console.log('i=', i);

// for(let a = 0; a < 10; a++){
//     console.log('a=', a);
// }

//aqui o let deixara de existir
// console.log('a=', a);

/////////////////////////////////////////////////////////////////////////
//usando var em loop
const funcs = []
for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]()
funcs[8]()

const funcs1 = []
for(let i = 0; i < 10; i++){
    funcs1.push(function(){
        console.log(i);
    })
}

funcs1[2]()
funcs1[8]()