import { actionTypes } from './actionTypes'
import {setFavorites} from '../../UtilityFunctions/localStorageFunctions'

const clear = () => { //multiple
    return {
        type: actionTypes.CLEAR,
    }
}

const updateFavorites = (favorites) => { //multiple
    setFavorites(favorites);
    return {
        type: actionTypes.UPDATE_FAVORITES,
        favorites
    }
}

export {
    clear,
    updateFavorites,
}