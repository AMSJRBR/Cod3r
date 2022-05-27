/**
 * Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings.
Exemplos:
Resoluções - Exercícios - Curso Fundamentos de Programação 3
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
 */

maiorOuIgual = (x, y) => {
    if (typeof x != typeof y) 
        return false

        return x >= y
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))