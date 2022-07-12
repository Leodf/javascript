/**
 * Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

function maiorEMenorValor(vetor) {
    const maior = Math.max(...vetor)
    const menor = Math.min(...vetor)

    return `O maior valor é ${maior} e menor valor é ${menor}`
}

const vetor = [66, 55, 99, 56, 78, 25, 45]
console.log(maiorEMenorValor(vetor))