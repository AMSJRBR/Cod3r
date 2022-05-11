Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
        } else if (nota.entre(7, 8.99)) { 
        console.log('Aprovado')
        } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
        } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
        } else {
            console.log('Nota inválida')  /* Caso remover esse Else,
            quando tiver um valor que não esta dentro dos paramentros da função ele vai desconsiderar e não vai imprimir nada */
        }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(13)
