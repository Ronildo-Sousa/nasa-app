import {http} from './config'

export default {
    getPicture: () => {
        return http.get()
    }
}