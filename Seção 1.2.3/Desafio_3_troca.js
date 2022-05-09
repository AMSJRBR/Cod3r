let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7 

a = 94;
b = 7;

console.log(a);
console.log(b);

// Outra forma

let temp = a; // valor de a é temp = temporario

a = b;
b = temp;

console.log(a);
console.log(b);

// Outra forma

[a, b = b, a]

console.log(a);
console.log(b);
