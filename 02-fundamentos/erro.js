function tratarErroELancar(erro) {
    // throw new Error('Errrouuuuu!!!!')
    // throw 10
    // throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Sou executado mesmo dando certo ou não!!!')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)