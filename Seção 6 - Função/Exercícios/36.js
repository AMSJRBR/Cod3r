/**
 * 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

vetorNum = [2, 4, 6, 8, 10]

vetorMult = (vetorNum, mult) => {
    let resultado = []
    vetorNum.forEach(element => {
        resultado.push(element * mult)
    });

    return console.log(resultado)
}

vetorMult(vetorNum, 2)
vetorMult(vetorNum, 6)

vetorMult2 = (vetorNum, mult) => {
    let resultado = []
    if (mult > 5) {
        vetorNum.forEach(element => {
            resultado.push(element * mult)
        })
        return console.log(resultado)
    } else {
        return console.log("Valor abaixo de 5")
    }
}

vetorMult2(vetorNum, 2)
vetorMult2(vetorNum, 6)