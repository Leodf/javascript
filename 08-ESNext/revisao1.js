// let e const
{
    var a = 2
    let b = 3
    console.log(b) //deve estar dentro do bloco para funcionar
}
console.log(a)

//template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = 'Cod3er'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9}
console.log(i, nome)