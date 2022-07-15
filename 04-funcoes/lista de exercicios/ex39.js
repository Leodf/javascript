/**
 * Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
 */

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

function trocaPosicaoVetor(vetor1, vetor2) {
    if (vetor1.length != vetor2.length) {
        console.log('Os vetores não tem o mesmo tamanho!')
    } else {
        for(let i = 0; i < vetor1.length; i++) {
            vetor1.unshift(vetor2.pop())
            vetor2.unshift(vetor1.pop())
        }

        console.log(`Novo vetor A: ${vetor1}`)
        console.log(`Novo vetor B: ${vetor2}`)
    }
}

trocaPosicaoVetor(vetorA, vetorB)