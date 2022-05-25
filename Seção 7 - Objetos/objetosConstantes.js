// pessoa -> 123 -> {...} Aqui muda pois não estamos alterando o pessoa, mas uma caracteristica dentro dele que é o nome
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: " Ana"}, vai dar erro pois o endereço continua 123 

Object.freeze(pessoa) // torna o objeto todo constante

pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa.end)

const pessoaConstante = Object.freeze({ Nome: ' Joao'})
pessoaConstante.nome = ' Jason '
console.log(pessoaConstante)