/**
 * Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

const vetor = [1, 2, 2, 4, 6, 6, 7, 8, 9, 10]

function lerParImpar(vetor) {
    let par = 0
    let impar = 0

    vetor.forEach(element => {
        if (element % 2 == 0) {
            par++
        } else {
            impar++
        }
    });

    return `no vetor tem ${par} número(s) par(es) e ${impar} número(s) ímpar(es)`
}

console.log(lerParImpar(vetor))