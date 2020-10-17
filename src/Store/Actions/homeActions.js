import { actionTypes } from '../actionTypes'
import { store } from '../store'
import { arrayExists, convertTemp, forLoopconvertFahrenheitToCelsius } from '../../UtilityFunctions/functions'
import { getFavorites, setFavorites } from '../../UtilityFunctions/localStorageFunctions'
import axios from 'axios'
import { API_PATH, DEFAULT_CITY_KEY, DEFAULT_CITY_NAME } from '../../Constants/const'
import { clear, loading } from './actions'

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
    const unit = store.getState().navigation.unit;
    const icon = data[1].data[0].WeatherIcon < 10 ? '0' + data[1].data[0].WeatherIcon : data[1].data[0].WeatherIcon;
    const currentTemp = unit === 'C' ? Math.floor(data[1].data[0].Temperature.Metric.Value) : Math.floor(data[1].data[0].Temperature.Imperial.Value);
    const currentStateOfWeather = data[1].data[0].WeatherText;
    const fiveDaysForecast = unit === 'C' ? convertTemp(data[0].data.DailyForecasts) : data[0].data.DailyForecasts;

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

const firstTimeFinished = () => {
    return {
        type: actionTypes.FIRST_TIME_FINISHED,
    }
}

const removeFromFavorites = (key) => {
    const favoriteCities = store.getState().home.favorites;
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



const firstLoad = () => async dispatch => { //get first data = Tel Aviv/Current location
    dispatch(loading());
    const data = await axios.all([axios.get('forecasts/v1/daily/5day/' + DEFAULT_CITY_KEY + API_PATH),
    axios.get('currentconditions/v1/' + DEFAULT_CITY_KEY + API_PATH)]);
    dispatch(setCurrentCityDetails(data, DEFAULT_CITY_KEY, DEFAULT_CITY_NAME));
    dispatch(firstTimeFinished()); 

    try{
        navigator.geolocation.getCurrentPosition(async (pos) => { //if success
            let crd = pos.coords;
            const response = await axios.get(`locations/v1/cities/geoposition/search${API_PATH}&q=${crd.latitude}%2C${crd.longitude}`);
            dispatch(submit(response.data.Key, response.data.EnglishName));
            dispatch(firstTimeFinished());
        },
            //if error
            () => { dispatch(openModal('Note', 'Access denied to your location! No worries, we will use Tel Aviv as default.')); },
            { //settings
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
    }
    catch(error){
        dispatch(openModal('Error', error.toString()));
    }
   
}


const changeHandler = (event) => async dispatch => {
    dispatch(updateText(event.target.value));
    const response =  await axios.get('locations/v1/cities/autocomplete' + API_PATH + '&q=' + event.target.value)
    try{
        let arr = [];
        for (let i = 0; i < response.data.length; i++) {
            arr[i] = {
                key: response.data[i].Key,
                text: response.data[i].LocalizedName + ',' + response.data[i].AdministrativeArea.LocalizedName + ',' + response.data[i].Country.ID,
                value: response.data[i].LocalizedName + ',' + response.data[i].AdministrativeArea.LocalizedName + ',' + response.data[i].Country.ID,
    
            }
        }
        dispatch(updateSearch(arr));
    }
    catch(error){
        dispatch(openModal('Error', error.toString()));
    }
    
    
}

const submit = (cityKey, cityName) => async dispatch => {
    dispatch(loading());
    const data = await axios.all([axios.get('forecasts/v1/daily/5day/' + cityKey + API_PATH),
    axios.get('currentconditions/v1/' + cityKey + API_PATH)]);

    try{
        dispatch(setCurrentCityDetails(data, cityKey, cityName));
        dispatch(clear());
    }
    catch(errors){
        dispatch(openModal('Error', errors.toString()));
    }
}


export {
    updateText,
    updateSearch,
    setCurrentCityDetails,
    addToFavorites,
    firstTimeFinished,
    removeFromFavorites,
    closeModal,
    openModal,
    submit,
    changeHandler,
    firstLoad
}

