/**
 * Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento:
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

function planoAumento (plano, salarioAtual) {
    switch(plano){
        case 'A':
            return salarioAtual*(1 + 0.1)
        case 'B':
            return salarioAtual*(1 + 0.15)
        case 'C':
            return salarioAtual*(1 + 0.2)
        default:
            return 'Selecione um plano válido'
    }
}

console.log(planoAumento('A', 1900))
console.log(planoAumento('B', 1900))
console.log(planoAumento('C', 1900))
console.log(planoAumento('D', 1900))