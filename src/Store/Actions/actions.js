import { actionTypes } from '../actionTypes'
import { setFavorites } from '../../UtilityFunctions/localStorageFunctions'

const clear = () => {
    return {
        type: actionTypes.CLEAR,
    }
}

const updateFavorites = (favorites) => {
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