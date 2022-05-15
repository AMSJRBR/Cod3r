/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
* e o resto da divisão destes dois valores. */

/* PRMEIRA TENTATIVA
* divisao = (dividendo, divisor) => dividendo / divisor
*
* console.log(divisao(2, 3)) 
* Só informa o conciente
*/

function divisao2 (dividendo, divisor) {
    let resto = dividendo % divisor 
    let coeficiente = parseInt((dividendo / divisor)) // Função inteira
    return console.log (coeficiente, resto)
}
divisao2(20, 3)
divisao2(3478, 26) 