import { actionTypes } from '../actionTypes'
import axios from 'axios'
import { getFavorites } from '../../UtilityFunctions/localStorageFunctions'
import { arrayExists, forLoopconvertFahrenheitToCelsius } from '../../UtilityFunctions/functions'
import { API_PATH } from '../../Constants/const'
import { updateFavorites } from './actions'
import { store } from '../store'


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

const firstLoadFavorites = () => async dispatch => {
    const oldFavorites = getFavorites();
    let requests = [];
    if(arrayExists(oldFavorites)){
        for (const favorite of oldFavorites) {
            requests.push(
                axios.all([axios.get('forecasts/v1/daily/5day/' + favorite.key + API_PATH),
                axios.get('currentconditions/v1/' + favorite.key + API_PATH)])
            )
        }
        const unit = store.getState().navigation.unit;
        const response = await axios.all(requests);

            for (let i = 0; i < response.length; i++) {
                oldFavorites[i].fiveDaysForecast = unit === 'C' ? forLoopconvertFahrenheitToCelsius(response[i][0].data.DailyForecasts) : response[i][0].data.DailyForecasts;
                oldFavorites[i].currentStateOfWeather = response[i][1].data[0].WeatherText;
                oldFavorites[i].currentTemp = unit === 'C' ? Math.floor(response[i][1].data[0].Temperature.Metric.Value) : Math.floor(response[i][1].data[0].Temperature.Imperial.Value);
                oldFavorites[i].icon = response[i][1].data[0].WeatherIcon < 10 ? '0' + response[i][1].data[0].WeatherIcon : response[i][1].data[0].WeatherIcon;
            }
            dispatch(updateFavorites(oldFavorites));
            dispatch(firstTimeFinishedFavorites());
    }
    
}

export {
    setFavoriteCityDetails,
    firstTimeFinishedFavorites,
    firstLoadFavorites
}