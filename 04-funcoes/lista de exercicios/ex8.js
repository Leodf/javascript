/**
 * Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
 * Obs.: O primeiro jogo não conta como novo recorde do melhor.
    Exemplo:
    String: “10 20 20 8 25 3 0 30 1”
    Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)
 */

const pontosMarcados = '10 0 20 8 25 3 3 30 1'

function pontuacao (lista) {

    let pontos = lista.split(' ')
    
    let piorJogo = 1
    let recorde = 0
    let maximo = Number(pontos[0])
    let minimo = Number(pontos[0])

    for (let i = 1; i < pontos.length; i++) {
        if (Number(pontos[i]) > maximo){
            maximo = Number(pontos[i])
            recorde++
        } else if (pontos[i] < minimo){
            minimo = pontos[i]
            piorJogo = i+1;
        }
    }

    return [recorde, piorJogo]
}

console.log(pontuacao(pontosMarcados))