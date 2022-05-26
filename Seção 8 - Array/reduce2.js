const aluno = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas?
const allBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(aluno.map(a => a.bolsista).reduce(allBolsistas))

// Desafio 2: Algum aluno é bolsita?
const algumBolsita = (resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce(algumBolsita))