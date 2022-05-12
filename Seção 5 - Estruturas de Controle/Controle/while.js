/* While é a quantidade de repetições quando você tem uma quantidade indeterminada de vezes 
(mas podemos usar com uma quantidade determinada de vezes também). */

function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // Baseado em uma expressão 'True of False'
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`) // Atentar para " ´ ` ", pois assim no uso normal de string não lé o 'let'.
}

console.log('Até a próxima!')