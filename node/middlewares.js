//middleware patter

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next() //chama o proximo passo da cadeia
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next() //chama o proximo passo da cadeia
}

const passo3 = (ctx) => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { //operador rest
    const execPasso = indice => {
        middlewares && indice < middlewares.length 
        && middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)