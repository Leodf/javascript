/**
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
 */

let resultado = num => num == 0 ? 'Indivisivel' : num % 3 == 0 ? 'True' : 'False'

for (i = 0; i <= 100; i++) {
    console.log(i, resultado(i))
}
