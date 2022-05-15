/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

// Juros Simples
jurosSimples = (capInc, txJ, time) => {
    let jurosSimples = capInc * txJ * time 
    let montante = (capInc * (1 + txJ * time) - jurosSimples)
    let retornoDoMontante = montante + jurosSimples

return console.log(`O retorno da aplicação será de ${jurosSimples} e o montante ${retornoDoMontante}`) 
}

jurosSimples(1200, 0.02, 15) // 360


// Juros Composto
jurosComposto = (capInc, tx, time) => {
    let montante = capInc * ((1 + tx)**time)
    let montanteDeRetorno = montante - capInc
return console.log(`O retorno da aplicação será de ${montanteDeRetorno} e o montante ${montante}`) 
}

jurosComposto(2000, 0.04, 4) // 2339