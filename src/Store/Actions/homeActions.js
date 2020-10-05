import { actionTypes } from './actionTypes'
import { store } from '../StoreSetup/store'
import { forLoopconvertFahrenheitToCelsius } from '../../UtilityFunctions/functions'
import {getFavorites,setFavorites} from '../../UtilityFunctions/localStorageFunctions'

const updateText = (val) => {
    return {
        type: actionTypes.UPDATE_TEXT,
        val
    }
}

const updateSearch = (arr) => {
    return {
        type: actionTypes.UPDATE_SEARCH,
        arr
    }
}

const setCurrentCityDetails = (data, cityKey, cityName) => {
    const unit = store.getState().unit;
    const icon = data[1].data[0].WeatherIcon < 10 ? '0' + data[1].data[0].WeatherIcon : data[1].data[0].WeatherIcon;
    const currentTemp = unit === 'C' ? Math.floor(data[1].data[0].Temperature.Metric.Value) : Math.floor(data[1].data[0].Temperature.Imperial.Value);
    const currentStateOfWeather = data[1].data[0].WeatherText;
    const fiveDaysForecast = unit === 'C' ? forLoopconvertFahrenheitToCelsius(data[0].data.DailyForecasts) : data[0].data.DailyForecasts;

    return {
        type: actionTypes.SET_CURRENT_CITY_DETAILS,
        data,
        cityKey,
        cityName,
        icon,
        currentTemp,
        currentStateOfWeather,
        fiveDaysForecast
    }
}

const updateForecast = (arr) => {
    return {
        type: actionTypes.UPDATE_FORECAST,
        arr
    }
}

const addToFavorites = () => {
    const favorites = getFavorites();
    const current = store.getState().current;
    let newFav = [];
    if (!(Array.isArray(favorites) && favorites.length)) {
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

const firstTimeFinished = () => {
    return {
        type: actionTypes.FIRST_TIME_FINISHED,
    }
}

const removeFromFavorites = (key) => {
    const favoriteCities = store.getState().favorites;
    const newFavList = favoriteCities.filter(city => city.key !== key);
    setFavorites(newFavList);
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        favorites: newFavList
    }
}

const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL,
    }
}

const openModal = (title, text) => {
    return {
        type: actionTypes.OPEN_MODAL,
        title,
        text
    }
}

export {
    updateText,
    updateSearch,
    setCurrentCityDetails,
    updateForecast,
    addToFavorites,
    firstTimeFinished,
    removeFromFavorites,
    closeModal,
    openModal,
}

