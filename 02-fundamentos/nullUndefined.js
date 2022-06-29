let valor //não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) //TypeError: Cannot read properties of null (reading 'toString')

const produto = {}
// console.log(produto.preco.a) //TypeError: Cannot read properties of undefined (reading 'a')
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)