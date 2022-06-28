
let a = 7;
let b = 94;

console.log(a, b);

// solução convencional
// let z = a
// a = b
// b = z

// solução reduzida para funcionar precisa colocar ponto e virgula

[a, b] = [b, a];

console.log(a, b);