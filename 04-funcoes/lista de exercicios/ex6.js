/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

const montanteJurosSimples = function (capital, taxa, tempo) {
    const montante = (capital*(1 + taxa*tempo)).toFixed(2)
    return console.log(`O capital inicial é R$ ${capital} com taxa de ${taxa} ao mes no período de ${tempo} terá um retorno de R$ ${montante} com juros simples`)
} 

const montanteJurosCompostos = function (capital, taxa, tempo) {
    const montante = (capital*(1 + taxa)**tempo).toFixed(2)  
    return console.log(`O capital inicial é R$ ${capital} com taxa de ${taxa} ao mes no período de ${tempo} terá um retorno de R$ ${montante} com juros compostos`)
}

montanteJurosSimples(10000, 0.05, 18)
montanteJurosCompostos(10000, 0.05, 18)