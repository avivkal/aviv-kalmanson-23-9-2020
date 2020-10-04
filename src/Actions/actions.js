import { actionTypes } from '../Constants/actionTypes'
import { store } from '../Constants/store'
import { forLoopconvertFahrenheitToCelsius } from '../Utility Functions/functions'

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


const toggle = (newTemp, newUnit, fiveDays) => {
    return {
        type: actionTypes.TOGGLE,
        unit: newUnit,
        currentTemp: newTemp,
        fiveDaysForecast: fiveDays
    }
}


const updateForecast = (arr) => {
    return {
        type: actionTypes.UPDATE_FORECAST,
        arr
    }
}

const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const current = store.getState().current;
    let newFav = [];
    if (!(Array.isArray(favorites) && favorites.length)) {
        newFav.push(current);
    }
    else {
        newFav = favorites.concat(current);
    }
    localStorage.setItem('favorites', JSON.stringify(newFav));
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        favorites: newFav
    }
}

const setFavoriteCityDetails = (payload) => {
    return {
        type: actionTypes.SET_FAVORITE_CITY_DETAILS,
        payload
    }
}

const firstTimeFinished = () => {
    return {
        type: actionTypes.FIRST_TIME_FINISHED,
    }
}

const clear = () => {
    return {
        type: actionTypes.CLEAR,
    }
}
const removeFromFavorites = (key) => {
    const favoriteCities = store.getState().favorites;
    const newFavList = favoriteCities.filter(city => city.key !== key);
    localStorage.setItem('favorites', JSON.stringify(newFavList));
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        favorites: newFavList
    }
}

const toggleDarkMode = () => {
    return {
        type: actionTypes.TOGGLE_DARK_MODE,
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

const updateFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return {
        type: actionTypes.UPDATE_FAVORITES,
        favorites
    }
}

const firstTimeFinishedFavorites = () => {
    return {
        type: actionTypes.FIRST_TIME_FINISHED_FAVORITES,
    }
}


export {
    updateText,
    updateSearch,
    setCurrentCityDetails,
    toggle,
    updateForecast,
    addToFavorites,
    setFavoriteCityDetails,
    firstTimeFinished,
    clear,
    removeFromFavorites,
    toggleDarkMode,
    closeModal,
    openModal,
    updateFavorites,
    firstTimeFinishedFavorites
}