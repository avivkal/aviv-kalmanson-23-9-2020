import { actionTypes } from '../Constants/actionTypes'

const clear = () => { //multiple
    return {
        type: actionTypes.CLEAR,
    }
}

const updateFavorites = (favorites) => { //multiple
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return {
        type: actionTypes.UPDATE_FAVORITES,
        favorites
    }
}

export {
    clear,
    updateFavorites,
}