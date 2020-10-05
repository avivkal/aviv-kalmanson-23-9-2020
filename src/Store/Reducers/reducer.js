const initialState = {
    favorites: [],
    current: {},
    searchText: '',
    searchArr: [],
    unit: 'C',
    firstTime: true,
    firstTimeFavorites: true,
    darkmode: false,
    show: false,
    modalTitle: '',
    modalText: '',
    darkModeText: 'light'
}

const reducer = (state = initialState, action) => { 
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
                current: {
                    key: action.cityKey,
                    cityName: action.cityName,
                    currentTemp: action.currentTemp,
                    currentStateOfWeather: action.currentStateOfWeather,
                    fiveDaysForecast: action.fiveDaysForecast,
                    icon: action.icon
                },

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
        case 'UPDATE_FORECAST':
            return {
                ...state,
                fiveDaysForecast: action.arr
            }
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: action.favorites
            }

        case 'SET_FAVORITE_CITY_DETAILS':
            return {
                ...state,
                current: { ...action.payload }
            }
        case 'FIRST_TIME_FINISHED':
            return {
                ...state,
                firstTime: false
            }
        case 'CLEAR':
            return {
                ...state,
                searchArr: [],
                searchText: ''
            }
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: action.favorites
            }
        case 'TOGGLE_DARK_MODE':
            return Object.assign({}, state, {
                darkmode: !state.darkmode,
                darkModeText: state.darkModeText==='light' ? 'dark' : 'light'
            });
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
                favorites: action.favorites
            }

        case 'FIRST_TIME_FINISHED_FAVORITES':
            return {
                ...state,
                firstTimeFavorites: false
            }

        default:
            return state
    }
}

export default reducer;