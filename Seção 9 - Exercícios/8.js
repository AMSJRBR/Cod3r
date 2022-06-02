/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplicar(numeroA, numeroB) {
    let resultado = 0
    for(let i = 0; i < numeroB; i++)
    resultado += numeroA
    return resultado
    }

console.log(multiplicar(2,5))
console.log(multiplicar(5,2))  