//ele executa e recebe uma funcao de callback

let forEach2 = function(callback){    
    //console.log(`chaves: ${Object.keys(this)} | Valores: ${Object.values(this)}`)    
    for(let i = 0; i < this.length; i++){
        // console.log(, 'pos: ', i);
        callback(this[i], i, this);
    }
    
}

Array.prototype.forEach2 = forEach2;

let arr = [1,2,3,4,5,6]

// arr.forEach(function(ele, ind){
//     console.log(ele)
// })
arr.forEach(function(ele, ind, x){
    console.log(`ele: ${ele} - index: ${ind} - 3°param: ${x}`)

})
console.log('----------------------------------------------------------------')
arr.forEach2(function(ele, ind, x){
    console.log(`ele: ${ele} - index: ${ind} - 3°param: ${x}`)
})
console.log('----------------------------------------------------------------')
arr.forEach((ele, i) => console.log(ele, i))
console.log('----------------------------------------------------------------')
arr.forEach2((ele,i) => console.log(ele, i))
// console.log(forEach2())


// console.log(typeof arr)