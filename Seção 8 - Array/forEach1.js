const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Atentar que o indice sempre vai ser o 2 parametro dentro do forEach() 1Pam :Nome / 2Pam: index / 3Pam: Array
aprovados.forEach(function(nome, indice, array) { 
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)