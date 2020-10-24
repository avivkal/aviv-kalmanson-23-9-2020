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

const loading = () => {
    return{
        type: actionTypes.LOADING
    }
}

const finishedLoading = () => {
    return{
        type: actionTypes.FINISHED_LOADING
    }
}

export {
    clear,
    updateFavorites,
    loading,
    finishedLoading
}