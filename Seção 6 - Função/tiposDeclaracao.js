console.log(soma(3, 4))

// function declaration -- O interpretador carrega a função ao iniciar, ou seja, já está carregado a função
function soma(x, y){
    return x + y
}

// function expression -- So vai ler após a função
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

// named function expression
const mult = function mult (x, y) {
    return x * y
}

console.log(mult(3, 4))