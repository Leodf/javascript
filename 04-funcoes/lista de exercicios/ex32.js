/**
 * Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

function calcularMedia(vetor) {
    let somaVetor = 0
    for (let i = 0; i < vetor.length; i++) {
        somaVetor += vetor[i]
    }

    let media = somaVetor / vetor.length

    return media
}

const vetor = [1, 2, 3, 4, 5]

console.log(calcularMedia(vetor))