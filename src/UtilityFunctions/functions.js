import { CELSIUS, FAHRENHEIT } from "../Constants/const";

const convertCelsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit.toFixed(1);
}

const convertFahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius.toFixed(1);
}

const findKeyByName = (name, searchText) => {
    const city = searchText.find(current => current.text === name);
    if (city === undefined) //if clicked on the enter key
        return searchText[0].key;
    return city.key; //if clicked on a city with the mouse
}

const existsInFavorites = (x, favorites) => {
    if (!(Array.isArray(favorites) && favorites.length))
        return false;
    const found = favorites.find(favorite => x.key === favorite.key);
    return found !== undefined;
}

const convertTemp = (arr) => {
    if (arrayExists(arr)) {
        arr.map((current) => {
            if(current.Temperature.Minimum.Unit === FAHRENHEIT){
                current.Temperature.Minimum.Value = convertFahrenheitToCelsius(current.Temperature.Minimum.Value);
                current.Temperature.Maximum.Value = convertFahrenheitToCelsius(current.Temperature.Maximum.Value);
                current.Temperature.Minimum.Unit = CELSIUS;
                current.Temperature.Maximum.Unit = CELSIUS;
            }
            else{
                current.Temperature.Minimum.Value = convertCelsiusToFahrenheit(current.Temperature.Minimum.Value);
                current.Temperature.Maximum.Value = convertCelsiusToFahrenheit(current.Temperature.Maximum.Value);
                current.Temperature.Minimum.Unit = FAHRENHEIT;
                current.Temperature.Maximum.Unit = FAHRENHEIT;
            }
            
            return current;
        });
    }
    return arr;
}

const convertFavoritesToCelsius = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if(arrayExists(favorites)){
        favorites.map(currentFavorite => {
            currentFavorite.currentTemp = convertFahrenheitToCelsius(currentFavorite.currentTemp);
            currentFavorite.fiveDaysForecast = convertTemp(currentFavorite.fiveDaysForecast);
            return currentFavorite;
        });
    }

    return favorites;

}

const convertFavoritesToFahrenheit = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if(arrayExists(favorites)){
        favorites.map(currentFavorite => {
            currentFavorite.currentTemp = convertCelsiusToFahrenheit(currentFavorite.currentTemp);
            currentFavorite.fiveDaysForecast = convertTemp(currentFavorite.fiveDaysForecast);
            return currentFavorite;
        });
    }
    return favorites;
}


const convertIconPath = (icon) => {
    //example: 1 => 01
    if (icon < 10) {
        return '0' + icon;
    }
    return icon;
}


const arrayExists = (arr) => {
    return arr !== undefined && arr !== null && arr.length > 0;
}
export {
    convertCelsiusToFahrenheit,
    convertFahrenheitToCelsius,
    existsInFavorites,
    findKeyByName,
    convertTemp,
    convertFavoritesToCelsius,
    convertFavoritesToFahrenheit,
    convertIconPath,
    arrayExists
}

