/**
 * Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function classificarDia (diadasemana) {
    switch (diadasemana){
        case 1:
        case 7:
            console.log('fim de semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('dia útil')
            break
        default:
            console.log('entrada inválida digite de 1 a 7')
    }
}
classificarDia(1)
classificarDia(4)
classificarDia(5)
classificarDia(6)
classificarDia(3)
classificarDia(2)
classificarDia(7)
classificarDia(8)
classificarDia('domingo')