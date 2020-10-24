import { actionTypes } from '../actionTypes'
import axios from 'axios'
import { getFavorites, setFavorites } from '../../UtilityFunctions/localStorageFunctions'
import { arrayExists, convertTemp } from '../../UtilityFunctions/functions'
import { API_PATH } from '../../Constants/const'
import { updateFavorites,loading, finishedLoading } from './actions'
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
    dispatch(loading());
    const oldFavorites = getFavorites();
    let requests = [];
    if(arrayExists(oldFavorites)){
        for (const favorite of oldFavorites) {
            requests.push(
                axios.all([axios.get('forecasts/v1/daily/5day/' + favorite.key + API_PATH),
                axios.get('currentconditions/v1/' + favorite.key + API_PATH)])
            )
        }
        const unit = store.getState().home.unit;
        const response = await axios.all(requests);

            for (let i = 0; i < response.length; i++) {
                oldFavorites[i].fiveDaysForecast = unit === 'C' ? convertTemp(response[i][0].data.DailyForecasts) : response[i][0].data.DailyForecasts;
                oldFavorites[i].currentStateOfWeather = response[i][1].data[0].WeatherText;
                oldFavorites[i].currentTemp = unit === 'C' ? Math.floor(response[i][1].data[0].Temperature.Metric.Value) : Math.floor(response[i][1].data[0].Temperature.Imperial.Value);
                oldFavorites[i].icon = response[i][1].data[0].WeatherIcon < 10 ? '0' + response[i][1].data[0].WeatherIcon : response[i][1].data[0].WeatherIcon;
            }
            dispatch(updateFavorites(oldFavorites));
            dispatch(firstTimeFinishedFavorites());
    }
    dispatch(finishedLoading());
    
}

const removeFromFavorites = (key) => {
    const favoriteCities = store.getState().favorites.favorites;
    const newFavList = favoriteCities.filter(city => city.key !== key);
    setFavorites(newFavList);
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        favorites: newFavList
    }
}
const addToFavorites = () => {
    const favorites = getFavorites();
    const current = store.getState().home.current;
    let newFav = [];
    if (!arrayExists(favorites)) {
        newFav.push(current);
    }
    else {
        newFav = favorites.concat(current);
    }
    setFavorites(newFav);
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        favorites: newFav
    }
}

export {
    setFavoriteCityDetails,
    firstTimeFinishedFavorites,
    firstLoadFavorites,
    addToFavorites,
    removeFromFavorites
}