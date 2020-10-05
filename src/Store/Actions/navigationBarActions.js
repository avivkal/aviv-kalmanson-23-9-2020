import { actionTypes } from '../actionTypes'

const toggle = (newTemp, newUnit, fiveDays) => {
    return {
        type: actionTypes.TOGGLE,
        unit: newUnit,
        currentTemp: newTemp,
        fiveDaysForecast: fiveDays
    }
}

const toggleDarkMode = () => {
    return {
        type: actionTypes.TOGGLE_DARK_MODE,
    }
}

export{
    toggle,
    toggleDarkMode
}