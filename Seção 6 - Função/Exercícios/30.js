// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

valores = (vetor) => {
    let maior 
    let menor
    for (i = 0; i < vetor.length; i++) {
        if(maior === undefined && menor === undefined) {
            maior = vetor [i]
            menor = vetor [i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor [i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor = [2, 20, 200, 2000]

console.log(valores(vetor))