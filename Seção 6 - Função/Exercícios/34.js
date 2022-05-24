/**
 * 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
 */

comparativo = (string1, string2) => {
    let contido = true
    for (let i = 0; i < string1.length; i++) {
        let caracteresString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caracteresString2 = string2.charAt(j).toLowerCase()
            if (caracteresString1 == caracteresString2) {
                contido = true
                break
            } else {
                contido = false
            }
            }
        }
    return contido
}

console.log(comparativo("abcf6", "abcdg1"))
console.log(comparativo('abc7','CAB1543fdbvx'))
console.log(comparativo('abc','CAB'))