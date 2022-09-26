import { createStore } from 'vuex'
import moduloToggleMenu from './modules/toggleMenu'

const store = createStore({
    modules: {
        moduloToggleMenu
    }
})

export default store