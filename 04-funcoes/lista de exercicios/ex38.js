/**
 * Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
 */

function imprimirImpar(n1 = 0, n2 = 100) {
    let inicial = n1
    let final = n2

    if (n1 > n2) {
        inicial = n2
        final = n1
    }

    for (let i = inicial; i < final; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

imprimirImpar(10, -1)