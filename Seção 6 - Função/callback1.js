const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach cada elemento que tiver no array ele irá chamar a function
fabricantes.forEach(fabricante => console.log(fabricante))
