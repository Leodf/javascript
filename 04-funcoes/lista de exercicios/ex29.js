/**
 * Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.
 */

function criarVetor (elementos) {
    let vetor = []
    for (i = 1; i <= elementos; i++){
        vetor.push(i)
    }

    return vetor
}

function contarIntervaloVetor(vetor) {
    let dentroIntervalo = 0
    let foraIntervalo = 0

    for (i = 0; i < vetor.length; i++){
        if (vetor[i] < 10 || vetor[i] > 20) {
            foraIntervalo++
        } else {
            dentroIntervalo++
        }
    }

    return `Há ${foraIntervalo} números fora do intervalo e ${dentroIntervalo} números dentro do intervalo [10,20]`

}

const vetor = criarVetor(60)

console.log(vetor)
console.log(contarIntervaloVetor(vetor))