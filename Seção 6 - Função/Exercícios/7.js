/**
 * 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo” */

bhaskara = (ax2, bx, c) => {
    const raiz = Math.sqrt
    let delta = bx**2 - (4 * ax2 * c)
    let bhaskaraX1 = (-bx + raiz(delta)) / (2 * ax2)
    let bhaskaraX2 = (-bx - raiz(delta)) / (2 * ax2)
    if (delta < 0) {
        console.log("Delta é negativo")
    } else {
        console.log(`Resultados são ${bhaskaraX1} e ${bhaskaraX2}`)
    }
}

bhaskara(3, -5, 12) // Delta Negativo
bhaskara(3, -5, -12) // X1 = 3 e X2 = -1,333..