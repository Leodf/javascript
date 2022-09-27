const moduloUsuario = {
    state: {
        user: {
            name: 'Usuário Mock',
            email: 'mock@cod3r.com.br'
        }
    },
    getters: {
        pegarUsuario: state => state.user
    },
    actions: {},
    mutations: {}
}

export default moduloUsuario