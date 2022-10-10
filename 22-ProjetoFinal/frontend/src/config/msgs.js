import Toasted from 'vue-toasted'


register((
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
    { type: 'success', icon: 'check'}
))

toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Oops... Erro inesperado.' : payload.msg,
    { type: 'error', icon: 'times'}
)