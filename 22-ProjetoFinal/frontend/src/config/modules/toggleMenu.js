const moduloToggleMenu = {
    state: {
        isMenuVisible: true
    },
    getters: {
        estadoMenu: state => state.isMenuVisible
    },
    actions: {
        mudarEstado: ({ commit }) => commit('toggleMenu')
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if (isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            } else {
                state.isMenuVisible = isVisible
            }
        }
    }
}

export default moduloToggleMenu