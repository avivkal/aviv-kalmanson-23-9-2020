const initialState = {
    favorites: [], 
    current: {}, 
    searchText: '', 
    searchArr: [], 
    firstTime: true, 
    show: false,
    modalTitle: '', 
    modalText: '',
    loading: false 
}


const homeReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'UPDATE_TEXT': 
            return {
                ...state,
                searchText: action.val
            }
        case 'UPDATE_SEARCH':  
            return {
                ...state,
                searchArr: action.arr
            }
        case 'SET_CURRENT_CITY_DETAILS': 
            return {
                ...state,
                loading: false,
                current: {
                    key: action.cityKey,
                    cityName: action.cityName,
                    currentTemp: action.currentTemp,
                    currentStateOfWeather: action.currentStateOfWeather,
                    fiveDaysForecast: action.fiveDaysForecast,
                    icon: action.icon
                },

            }
        case 'ADD_TO_FAVORITES': 
            return {
                ...state,
                favorites: action.favorites
            }

        case 'FIRST_TIME_FINISHED': 
            return {
                ...state,
                firstTime: false
            }
        case 'REMOVE_FROM_FAVORITES': 
            return {
                ...state,
                favorites: action.favorites
            }

        case 'CLOSE_MODAL': 
            return {
                ...state,
                show: false
            }
        case 'OPEN_MODAL': 
            return {
                ...state,
                show: true,
                modalTitle: action.title,
                modalText: action.text
            }
            
        case 'UPDATE_FAVORITES':
            return {
                ...state,
                favorites: action.favorites,
                loading: false
            }

        case 'CLEAR': 
            return {
                ...state,
                searchArr: [],
                searchText: ''
            }

        case 'SET_FAVORITE_CITY_DETAILS': 
            return {
                ...state,
                current: { ...action.payload },
            }

        case 'TOGGLE': 
            return {
                ...state,
                unit: action.unit,
                current: {
                    ...state.current,
                    currentTemp: action.currentTemp,
                    fiveDaysForecast: action.fiveDaysForecast
                }
            }

        case 'LOADING': 
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default homeReducer;