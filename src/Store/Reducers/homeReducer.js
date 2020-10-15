const initialState = {
    favorites: [], 
    current: {}, 
    searchText: '', 
    searchArr: [], 
    firstTime: true, 
    show: false,
    modalTitle: '', 
    modalText: '', 
}


const homeReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'UPDATE_TEXT': //home
            return {
                ...state,
                searchText: action.val
            }
        case 'UPDATE_SEARCH':  //home
            return {
                ...state,
                searchArr: action.arr
            }
        case 'SET_CURRENT_CITY_DETAILS': //home
            return {
                ...state,
                current: {
                    key: action.cityKey,
                    cityName: action.cityName,
                    currentTemp: action.currentTemp,
                    currentStateOfWeather: action.currentStateOfWeather,
                    fiveDaysForecast: action.fiveDaysForecast,
                    icon: action.icon
                },

            }
        case 'ADD_TO_FAVORITES': //home
            return {
                ...state,
                favorites: action.favorites
            }

        case 'FIRST_TIME_FINISHED': //home
            return {
                ...state,
                firstTime: false
            }
        case 'REMOVE_FROM_FAVORITES': //home
            return {
                ...state,
                favorites: action.favorites
            }

        case 'CLOSE_MODAL': //home
            return {
                ...state,
                show: false
            }
        case 'OPEN_MODAL': //home
            return {
                ...state,
                show: true,
                modalTitle: action.title,
                modalText: action.text
            }

            //should not be here!! :
            
        case 'UPDATE_FAVORITES'://all
            return {
                ...state,
                favorites: action.favorites
            }

        case 'CLEAR': //all
            return {
                ...state,
                searchArr: [],
                searchText: ''
            }

        case 'SET_FAVORITE_CITY_DETAILS': //favorites
            return {
                ...state,
                current: { ...action.payload }
            }

        case 'TOGGLE': //navigation
            return {
                ...state,
                unit: action.unit,
                current: {
                    ...state.current,
                    currentTemp: action.currentTemp,
                    fiveDaysForecast: action.fiveDaysForecast
                }
            }


        default:
            return state
    }
}

export default homeReducer;