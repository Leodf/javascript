function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Parabens você passou!!!')
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.9)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade.... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

function seForMentiraEuFalo(valor) {
    if(!valor) {
        console.log('É mentira.... ' + valor)
    }
}

seForMentiraEuFalo()
seForMentiraEuFalo(null)
seForMentiraEuFalo(undefined)
seForMentiraEuFalo(NaN)
seForMentiraEuFalo('')
seForMentiraEuFalo(0)
seForMentiraEuFalo(-1)
seForMentiraEuFalo(' ')
seForMentiraEuFalo('?')
seForMentiraEuFalo([])
seForMentiraEuFalo([1, 2])
seForMentiraEuFalo({})