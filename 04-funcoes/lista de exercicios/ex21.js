/**
 * Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

function valorPlano (idade) {
    let valor = 100

    if (idade >= 60 ){
        valor += 130 
    } else if (idade >= 30) {
        valor += 95
    } else if (idade >= 10) {
        valor += 50
    } else {
        valor += 80
    }

    return `seu plano ficou no valor de R$ ${valor}`
}

console.log(valorPlano(60))
console.log(valorPlano(59))
console.log(valorPlano(30))
console.log(valorPlano(29))
console.log(valorPlano(10))
console.log(valorPlano(9))