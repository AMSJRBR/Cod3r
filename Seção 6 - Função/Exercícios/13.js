/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

diaDaSemana = (num) => {
    switch (num) {
        case 1:
            console.log("Domingo, final de semana.")
        break
        case 2:
            console.log("segunda-feira, dia útil.")
        break
        case 3:
            console.log("terça-feira, dia útil.")
        break
        case 4:
            console.log("quarta-feira, dia útil.")
        break
        case 5:
            console.log("quinta-feira, dia útil.")
        break 
        case 6:
            console.log("sexta-feira, dia útil.")
        break
        case 7:
            console.log("Sábado, final de semana.")
        break
        default:
            console.log("Dia inválido.")
        break
    }
}

console.log(diaDaSemana(1))

// Resposta do professor - deveria ter feito o intervalo dos cases dentro e em vez de break era melhor o return.

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));