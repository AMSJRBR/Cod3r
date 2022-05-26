const produto = [
    {nome: 'Nootbook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: false},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

console.log(produto.filter(function(p){
    return false 
}))

console.log(produto.filter(function(p) {
    return p.preco > 500 && p.fragil 
}))

// Dividindo os Filter em duas funções
const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil == false
console.log(produto.filter(caro).filter(fragil))