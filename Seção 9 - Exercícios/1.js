/**
 * Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
 */

ola = function (nome) {
    const string = `Olá, ` + nome + '!' 
    return string
}

console.log(ola(`Marcia`))