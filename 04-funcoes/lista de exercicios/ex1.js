//  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

const soma = (a, b) => a + b
const sub = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => a / b

const imprimirResultado = function (a, b, operacao) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 5, soma)
imprimirResultado(3, 5, sub)
imprimirResultado(3, 5, mult)
imprimirResultado(3, 5, div)
