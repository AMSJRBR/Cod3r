// Switch não é uma expressão relacional que retorna um valor 'true or false', só passa valores e tipos
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // Só irá sair do Switch, apenas colocando o 'Break', caso não colocar ele irá seguir executando
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: /* Pode ser colocado em outra posição,
         porém acompanhado do break e ele não é obrigatório pra se colocar pra funcionar o switch */
            console.log('Nota inválida')
    }
    // console.log('Fim!') - Ele sai do bloco
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(16.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)