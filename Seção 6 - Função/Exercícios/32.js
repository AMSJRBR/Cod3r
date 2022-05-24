// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

mediaArit = (vetor) => {
    let soma = 0
    for (let i = 0; i < vetor.length; i++)
        soma += vetor[i]
        return soma/vetor.length
}

vetor = [w, 2, 3, 4, 5]

console.log(mediaArit(vetor))