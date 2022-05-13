const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // Resolvendo o problema do this com bind.
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
