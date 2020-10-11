const initialState = {
    firstTimeFavorites: true,
}


const favoritesReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'FIRST_TIME_FINISHED_FAVORITES': //favorites
            return {
                ...state,
                firstTimeFavorites: false
            }

        default:
            return state
    }
}

export default favoritesReducer;