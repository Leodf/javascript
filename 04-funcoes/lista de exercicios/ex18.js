/**
 * Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

function lerNumeroExtenso(num) {
    switch(num) {
        case 0:
            return 'zero'
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'tres'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return 'Número inválido!! Digite um numero de 0 a 10'
    }
}

for(i = 0; i <= 11; i++){
    console.log(lerNumeroExtenso(i))
}
