const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1));
console.log(resultado(6.7));

// Outro método de escrever a mesma coisa
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'

}

console.log(resultado(7.1));
console.log(resultado(6.7));
