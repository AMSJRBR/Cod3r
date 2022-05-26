// Array é um Object - Ordem de inícia no [0]
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // Usual para alterar algum pam dentro do array
aprovados.push('Abia') // Já adiciona mais uma váriavel dentro do Array sem precisar informar a localização
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length) // acrescenta, mas ficara com os slots empty
console.log(parseFloat[8] === undefined) // True, Mas se for null é false 

console.log(aprovados)
aprovados.sort() // Ordena em ordem alfabética
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// aprovados.splice(0, 1, 'Elemento 1', 'Elemento2') Exclui ou acrescenta algo dentro do Array e consegue exclui e acrescentar ao mesmo tempo
aprovados.splice(1, 1)
console.log(aprovados)