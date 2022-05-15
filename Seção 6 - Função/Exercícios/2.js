/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangulo(a, b, c) {
    const equilatero = (a = b = c)
    const isosceles = (a = b != c, a = c !=b, b = c != a)
    const escaleno = (a != b != c)
        
    if (equilatero != isosceles != escaleno) { 
        console.log('Equilátero')
    } else if (isosceles != equilatero != escaleno) {
        console.log('Isosceles')
    } else if (escaleno != equilatero != escaleno) {
        console.log('Escaleno')
    } else {
        console.log('Valores inválidos')
    }
}

triangulo(3, 3, 3)
triangulo(3, 4, 5)
triangulo(3, 3, 4)

function triangulo2 (a, b, c) {
    const a = a
    const b = b
    const c = c

    if (a == b == c) {
        console.log("equilatero")
    } else if ( a != b != c) {
        console.log("Escaleno")
    } else if (a = b != c, a = c !=b, b = c != a) {
        console.log("Isoscelees")
    } else {
        console.log("Inválido")
    }
}

triangulo2(3, 3, 3)
triangulo2(3, 4, 5)
triangulo2(3, 3, 4)