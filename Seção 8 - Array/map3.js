Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasNome = nome => nome.nome
const apenasPreco = preco => preco.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasNome)
console.log(resultado)

const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado2)
