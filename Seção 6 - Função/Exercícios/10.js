/**
 * 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
 */

geral = (a, b) => {
    divisao = a / b
    return console.log(Number.isInteger(divisao))
}

geral(6, 3)
geral(5,3)

divisivelPor3 = (d) => {
    let divisivelPor3 = d / 3
    return console.log(Number.isInteger(divisivelPor3))
}


divisivelPor3(4)
divisivelPor3(6)
divisivelPor3(8)