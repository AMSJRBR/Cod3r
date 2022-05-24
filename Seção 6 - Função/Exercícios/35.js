/**
 * 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.
 */
vetorPilha = [1, 2, 3, 4, 5]
vetorAdicionar = [6, 7, 8, 9, 10]

adicionarVetor = (vetorPilha, vetorAdicionar) => {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorPilha.push(vetorAdicionar[i])
    }
    console.log("vetor adicionado " + vetorAdicionar)
    console.log("Vetor Resultado " + vetorPilha)
}

adicionarVetor(vetorPilha, vetorAdicionar)