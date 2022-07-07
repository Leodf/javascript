/**
 * Faça um algoritmo que calcule o fatorial de um número.
 */

function fatorial(num) {
    let resultado = 0
    for (i = num; i > 0; i--){
        if (i == num) {
            resultado = i
        } else {
            resultado *= i
        }
    }

    return resultado
}

console.log(fatorial(10))