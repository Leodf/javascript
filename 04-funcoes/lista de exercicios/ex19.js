/**
 * O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.
 */

function valorLanche(codigo, qtde) {
    switch(codigo){
        case 100:
            return `Você comprou um cachorro quente e custa R$ ${qtde * 3.00}`
        case 200:
            return `Você comprou um Hambúrguer Simples e custa ${qtde * 4.00}`
        case 300:
            return `Você comprou um Cheeseburguer e custa R$ ${qtde * 5.50}`
        case 400:
            return `Você comprou um Bauru e custa R$ ${qtde * 7.50}`
        case 500:
            return `Você comprou um Refrigerante e custa R$ ${qtde * 3.50}`
        case 600:
            return `Você comprou um Suco e custa R$ ${qtde * 2.80}`
        default:
            return 'produto não existente'
    }
}

console.log(valorLanche(100, 2))
console.log(valorLanche(200, 2))
console.log(valorLanche(300, 2))
console.log(valorLanche(400, 2))
console.log(valorLanche(500, 2))
console.log(valorLanche(600, 2))
console.log(valorLanche(700, 2))