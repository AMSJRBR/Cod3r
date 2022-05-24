/**
 * 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

imparPar = (vetores) => {
    let pares = 0
    let impares = 0
    for (let i = 0; i < vetores.length; i++) {
        if (vetores[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }  
    }
    console.log(`${pares} números pares, ${impares} números impares.`)
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
imparPar(vetor)


let string = "banana é gostoso demais"
let resultado = string.length
console.log(resultado)

let valores = [-1, 2, 3, 4, 5];
let resultado2 = valores.length;
for (i = 0; i < valores.length; i++) {
    console.log(valores[i])
}