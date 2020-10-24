const initialState = {
    // favorites: [], 
    current: {}, 
    // searchText: '', 
    // searchArr: [], 
    firstTime: true, 
    // show: false,
    // modalTitle: '', 
    // modalText: '',
    // loading: false,
    unit: 'C',
    darkmode: false,
    darkModeText: 'light'
}


const homeReducer = (state = initialState, action) => { 
    switch (action.type) {
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


        case 'FIRST_TIME_FINISHED': 
            return {
                ...state,
                firstTime: false
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

        case 'TOGGLE_DARK_MODE': 
            return{
                ...state,
                darkmode: !state.darkmode,
                darkModeText: state.darkModeText==='light' ? 'dark' : 'light'
            }

        default:
            return state
    }
}

export default homeReducer;