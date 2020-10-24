import { actionTypes } from '../actionTypes'
import { store } from '../store'
import { convertTemp } from '../../UtilityFunctions/functions'
import axios from 'axios'
import { API_PATH, DEFAULT_CITY_KEY, DEFAULT_CITY_NAME } from '../../Constants/const'
import { clear, loading, finishedLoading } from './actions'
import { openModal } from './modalActions'

const setCurrentCityDetails = (data, cityKey, cityName) => {
    const unit = store.getState().home.unit;
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

const firstTimeFinished = () => {
    return {
        type: actionTypes.FIRST_TIME_FINISHED,
    }
}

const firstLoad = () => async dispatch => { //get first data = Tel Aviv/Current location
    try{
        dispatch(loading());
        const data = await axios.all([axios.get('forecasts/v1/daily/5day/' + DEFAULT_CITY_KEY + API_PATH),
        axios.get('currentconditions/v1/' + DEFAULT_CITY_KEY + API_PATH)]);
        dispatch(setCurrentCityDetails(data, DEFAULT_CITY_KEY, DEFAULT_CITY_NAME));
        dispatch(firstTimeFinished()); 
        dispatch(finishedLoading());
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

const submit = (cityKey, cityName) => async dispatch => {
    try{
        dispatch(loading());
        const data = await axios.all([axios.get('forecasts/v1/daily/5day/' + cityKey + API_PATH),
        axios.get('currentconditions/v1/' + cityKey + API_PATH)]);    
        dispatch(setCurrentCityDetails(data, cityKey, cityName));
        dispatch(clear());
    }
    catch(errors){
        dispatch(openModal('Error', errors.toString()));
    }
    dispatch(finishedLoading());
}

const toggle = (newTemp, newUnit, fiveDays) => {
    return {
        type: actionTypes.TOGGLE,
        unit: newUnit,
        currentTemp: newTemp,
        fiveDaysForecast: fiveDays
    }
}

const toggleDarkMode = () => {
    if(store.getState().home.darkModeText === 'light'){ //change the body background color
        document.body.style.backgroundColor = "#343A40";
    }
    else{
        document.body.style.backgroundColor = "white";
    }
    return {
        type: actionTypes.TOGGLE_DARK_MODE,
    }
}


export {
    setCurrentCityDetails,
    firstTimeFinished,
    submit,
    firstLoad,
    toggle,
    toggleDarkMode
}

