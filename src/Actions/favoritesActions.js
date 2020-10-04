import { actionTypes } from '../Constants/actionTypes'

const setFavoriteCityDetails = (payload) => {
    return {
        type: actionTypes.SET_FAVORITE_CITY_DETAILS,
        payload
    }
}

const firstTimeFinishedFavorites = () => {
    return {
        type: actionTypes.FIRST_TIME_FINISHED_FAVORITES,
    }
}

export {
   setFavoriteCityDetails,
   firstTimeFinishedFavorites
}