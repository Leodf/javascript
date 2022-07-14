/**
 * Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.
 */

const vetor1 = [1, 2, 3, 4, 5]


function multiplicaVetor(vetor, mult) {
    let resultado = []

    for (let i = 0; i < vetor.length; i++) {
            let novoNumero = vetor[i] * mult
            resultado.push(novoNumero)
        }
    
        return resultado
    }

console.log(multiplicaVetor(vetor1, 6))