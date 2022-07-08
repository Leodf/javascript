/**
 * Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

function valorAnuidade (mes, valorInicial) {
    
    if (mes < 1 || mes > 12){
        return 'mês invalido digite de 1 a 12'
    }

    let atraso = mes - 1
    const valorFinal = (valorInicial*(1 + 0.05)**atraso).toFixed(2)

    return valorFinal
}

console.log(valorAnuidade(1, 1000))
console.log(valorAnuidade(2, 1000))
console.log(valorAnuidade(3, 1000))
console.log(valorAnuidade(4, 1000))
console.log(valorAnuidade(5, 1000))
console.log(valorAnuidade(6, 1000))
console.log(valorAnuidade(7, 1000))
console.log(valorAnuidade(8, 1000))
console.log(valorAnuidade(9, 1000))
console.log(valorAnuidade(10, 1000))
console.log(valorAnuidade(11, 1000))
console.log(valorAnuidade(12, 1000))