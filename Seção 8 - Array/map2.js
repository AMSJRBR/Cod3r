const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)


// Outro método

const resultado2 = carrinho.map(carrinho => JSON.parse(carrinho).preco.toFixed(2))
console.log(resultado2)

// Outro método

const apenasPrecos = carrinho.map(function(e){
    return JSON.parse(e).preco.toFixed(2);
});

console.log(apenasPrecos)