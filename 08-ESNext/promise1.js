let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(valor => valor[0])
    .then(primeiroElemento => primeiroElemento[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))