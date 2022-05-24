/**
 * 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */

contadorNeg = (vetor) => {
    let qtdNegativos = 0
    let qtdPositivo = 0
    for (let i = 0; i < vetor.length; i++)
        if (vetor[i] < 0) {
            qtdNegativos++
        } else {
            qtdPositivo++
        }
        return `Negativos: ${qtdNegativos} e Positivos: ${qtdPositivo}`
}

vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(contadorNeg(vetor))
