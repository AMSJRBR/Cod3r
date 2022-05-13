// Função em JS é First-Class Object (Citizens)
// Higher-oder function

// criar de forma literal
function fun1( /* Pode ou não declarar os paramêtros entre os () */) { }

// Armazenar em uma variável
const fun2 = function() { }

// Armazenar em um array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como paramêtro
function run(fun) {
    fun() // Se não colocar os (), ao executar ela não vai invocar a function
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma (2, 3)
cincoMais(4)