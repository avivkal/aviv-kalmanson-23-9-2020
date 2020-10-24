const initialState = {
    firstTimeFavorites: true,
    favorites: [], 
}


const favoritesReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'FIRST_TIME_FINISHED_FAVORITES': 
            return {
                ...state,
                firstTimeFavorites: false,
            }

        case 'REMOVE_FROM_FAVORITES': 
            return {
                ...state,
                favorites: action.favorites
            }

        case 'ADD_TO_FAVORITES': 
            return {
                ...state,
                favorites: action.favorites
            }
            
        case 'UPDATE_FAVORITES':
            return {
                ...state,
                favorites: action.favorites,
            }

        default:
            return state
    }
}

export default favoritesReducer;