import { createStore } from 'vuex'
import moduloToggleMenu from './modules/toggleMenu'
import moduloUsuario from './modules/usuario'

const store = createStore({
    modules: {
        moduloToggleMenu,
        moduloUsuario
    }
})

export default store