/**
 * Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos.
 */

function progAritmetica(numeroTermos, primeiroTermo, razão) {
    let enesimoTermo = primeiroTermo + (numeroTermos-1)*razão
    let somaTermos = ((primeiroTermo + enesimoTermo) * numeroTermos) / 2

    return [enesimoTermo, somaTermos]
}

function progGeometrica(numeroTermos, primeiroTermo, razão) {
    let enesimoTermo = primeiroTermo*razão**(numeroTermos-1)
    let somaTermos = (primeiroTermo*(razão**numeroTermos-1)) / (razão-1)

    return [enesimoTermo, somaTermos]
}

console.log(progAritmetica(10, 1, 2))
console.log(progGeometrica(10, 1, 2))