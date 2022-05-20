/**
 * 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

planoDeSaude = (idade) => {

    let plano = 100
    let adicionalAte10 = 80
    let adicionalEntre10E30 = 50
    let adicionalEntre30E60 = 95
    let adicional60Mais = 130

    if (idade <= 10)
    return plano + adicionalAte10
    else if (idade <= 30) { 
        return plano + adicionalEntre10E30
    } else if (idade <= 60) {
        return plano + adicionalEntre30E60
    } else 
        return plano + adicional60Mais
}

console.log(planoDeSaude(30))