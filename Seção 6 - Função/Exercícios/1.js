/* 1) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function calculo(x, y) {
    soma = x + y,
    sub = x - y
    mult = x * y
    div = x / y 
    return [soma, sub, mult, div]
}

console.log(calculo(3, 4))