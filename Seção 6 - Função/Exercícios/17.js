/**
 * 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano Aumento
A     10%
B     15%
C     20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

 */

planoDeTrabalho = (plano, salario) => {

    let A = salario * 0.10 + salario
    let B = salario * 0.15  + salario
    let C = salario * 0.20  + salario

    switch (plano) {
        case "A":
            return console.log(`Seu novo salário será ${A} `)
        case "B":
            return console.log(`Seu novo salário será ${B}`)
        case "C":
            return console.log(`Seu novo salário será ${C}`)
        default:
            return ("Plano inválido")
    }
}

console.log(planoDeTrabalho('A', 1000));
console.log(planoDeTrabalho('B', 1000));
console.log(planoDeTrabalho('C', 1000));
console.log(planoDeTrabalho('D', 1000));

// Resposta do professor

console.log("Resposta do professor")

function calcularReajuste(plano2, salarioAtual) {
    switch (plano2) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
