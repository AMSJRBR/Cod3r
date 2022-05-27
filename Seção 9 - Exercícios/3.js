/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075" */

salarioFunc = (horasTrab, sal) => {
    return (`Salário igual a R$ ${(horasTrab * sal).toFixed(2).replace('.' , ',')}`)
}
console.log(salarioFunc(150, 40,5))

/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
30%, relativo a impostos.
Resoluções - Exercícios - Curso Fundamentos de Programação 2
O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário
no mês.
Exemplos:
calcularSalarioLiquido(180, 60) // retornará "Salário igual a R$ 7560" */

salarioFunc = (horasTrab, salPorHr) => {
    salBruto =  salPorHr * horasTrab
    salLiquido = salBruto - salBruto * (30/100)
    return (`Salário igual a R$ ${(salLiquido).toFixed(2).replace('.' , ',')}`)
}
console.log(salarioFunc(180, 60))