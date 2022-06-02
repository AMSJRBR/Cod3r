/**
 * Ternario
 *  x  =  expressao ? valor se verdadeiro : valor se falso
 *  ?  =  questionamento
 *  :  =  se nao
 * 
 * Condicionais usuais
 * && =  AND 
 * || = OR
 * 
 * 
 * Number => Numérico => infinito até +infinito => -20, 10, 4.5
 * String => letras/palavras/frases => "Alexandre", "A", "Dane-se o mundo."
 * Boolean => booleano 
 *          0 => Falso / Falso / Desligado
 *          1 => Verdadeiro / True / Ligado
 */

/**
 * Variável => let
 * Como declarar variável
 *      let <nome> = <valor>;
 * 
 * Constante => Const
 * Como declarar constante
 *      const <nome> = <valor>;
 *  = => Atribuir valores     
 */

// idade = 18

/**
 * Operadores lógicos
 * Igualdade => ( == )
 *      idade == 18 // true
 *      idade == 20 // false
 * 
 * Maior que => >
 *      idade > 18 // false
 *      idade > 10 // true
 * 
 * Menor que => ( < )
 *      idade < 18 // false
 *      idade < 20 // true
 * 
 * Maior ou Igual que => ( >= )
 *      idade >= 18 // true
 *      idade >= 19 // false
 * 
 * Menor ou Igual que => ( <= )
 *      idade <= 18 // true
 *      idade <= 19 // true
 * 
 * Idêntico => ( === )
 *      idade === 18 // false
 * 
 * Não Igual/Diferente => ( != )
 *      idade != 18 // false
 * Não idêntico => ( !== )
 *      idade !== " 18 " // true
 */

/**
 * Estrutura Condicional
 * if => se
 * else => senão
 * else if => senão se
 */

let comprouChurros = false;
let dinheiro = 4;
let ehMuitoSimpatico = true;

console.log("Pode comprar churros ? " + comprouChurros)

if (dinheiro >= 5) {
    comprouChurros = false;
} else if (ehMuitoSimpatico = true) {
    console.log("Ta anotado")
} else {
    console.log("Opa, tem dinheiro não meu patrão, vai fazer mais site")
}

console.log("Pode comprar churros ? " + comprouChurros)

/**
 * Estrutura de Repetição
 * for(declaração; condição; incremento) {}
 * contador = 0 => Executei
 * contador = 1 => Executei
 * contador = 2 => Executei
 * contador = 3 => Executei
 * contador = 4 => Executei
 * contador = 5 => não executei
 */

let quantasVezesRepetir = 5;

for (let contador = 0; contador < quantasVezesRepetir; contador = contador + 1) {
    console.log("Comprei Churros!")
}

