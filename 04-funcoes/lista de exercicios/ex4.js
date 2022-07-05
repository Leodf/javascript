/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */

function operacao(dividendo, divisor) {
    const resultado = dividendo / divisor
    const resto = dividendo % divisor

    return console.log(`resultado é: ${resultado} e o resto é ${resto}`)
}

operacao(4, 2)
operacao(5, 2)
operacao(11, 4)