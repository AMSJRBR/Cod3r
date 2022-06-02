/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

const receberPrimeiroEUltimoElemento = [7, 14, "olá"]  // retornará [7, "olá"]
const receberPrimeiroEUltimoElemento2 = [-100, "aplicativo", 16] // retornará [-100, 16]

primEUlt = (array) => {
    const primeiro = array[0]
    const ultimo = array[2]
    return [primeiro, ultimo]
}

console.log(primEUlt(receberPrimeiroEUltimoElemento))
console.log(primEUlt(receberPrimeiroEUltimoElemento2))

function metodo2(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]
    return [primeiroElemento, ultimoElemento]
}

console.log(metodo2(receberPrimeiroEUltimoElemento))
console.log(metodo2(receberPrimeiroEUltimoElemento2))

function metodo3(array) {
    const primeiro = array.shift()
    const ultimo = array.pop()
    return [primeiro, ultimo]
}

console.log(metodo3(receberPrimeiroEUltimoElemento))
console.log(metodo3(receberPrimeiroEUltimoElemento2))
