import { Toasted } from 'vue-toasted'

export const baseApiUrl = 'http://localhost:3000'

export function showError(e) {
    if(e && e.response && e.response.data){
        Toasted.global.defaultError({ msg: e.response.data })
    } else if(typeof e === 'string') {
        Toasted.global.defaultError({ msg: e})
    } else {
        Toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError}