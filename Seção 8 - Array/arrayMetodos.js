const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro ! , remove o último slot
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro slot
console.log(pilotos)

pilotos.unshift('Hamilton') // Faz o inverso de shift
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa sai
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Ele vai até o índice 4 porém ele não acrescenta no array o slot
console.log(algunsPilotos2)