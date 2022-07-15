/**
 * Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
 */

function conceitoNotas(vetor) {
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 5 ){
            console.log('CONCEITO D')
        } else if (vetor[i] < 7) {
            console.log('CONCEITO C')
        } else if (vetor[i] < 9) {
            console.log('CONCEITO B')
        } else {
            console.log('CONCEITO A')
        }
    }
}

conceitoNotas([2, 6, 7, 8, 9, 6.9, 11, 0, -1])