/**
 * 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

medPonderada = (codAluno, nota1, nota2, nota3) => {
    let media = (((nota1 * 3) + (nota2 * 3) + (nota3 *4)) / 10)

        if (media >= 5) {
            return console.log(`Código do Aluno ${codAluno} Aprovado, com Média ${media}
             1º prova ${nota1}
             2º prova ${nota2} 
             3º prova ${nota3}`)
        } else {
            return console.log(`Código do Aluno ${codAluno} Reprovado, com Média ${media}, 
            1º prova ${nota1}
            2º prova ${nota2} 
            3º prova ${nota3}`) 
        }
}

medPonderada(123,9,9,8)
medPonderada(142,2,5,7)