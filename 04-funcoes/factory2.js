
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const prod1 = criarProduto('Iphone', 3000)
const prod2 = criarProduto('Notebook', 5000)
console.log(prod1)
console.log(prod2)