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

const forLoopconvertFahrenheitToCelsius = (arr) => {
    if (arrayExists(arr)) {

        arr.map((current) => {
            current.Temperature.Minimum.Value = convertFahrenheitToCelsius(current.Temperature.Minimum.Value);
            current.Temperature.Maximum.Value = convertFahrenheitToCelsius(current.Temperature.Maximum.Value);
            current.Temperature.Minimum.Unit = 'C';
            current.Temperature.Maximum.Unit = 'C';
            return current;
        });
    }
    return arr;
}

const forLoopconvertCelsiusToFahrenheit = (arr) => {
    if (arrayExists(arr)) {
        arr.map((current) => {
            current.Temperature.Minimum.Value = convertCelsiusToFahrenheit(current.Temperature.Minimum.Value);
            current.Temperature.Maximum.Value = convertCelsiusToFahrenheit(current.Temperature.Maximum.Value);
            current.Temperature.Minimum.Unit = 'F';
            current.Temperature.Maximum.Unit = 'F';
            return current;
        });
    }
    return arr;
}


const convertTemp = (arr, currentUnit) => {
    if (arrayExists(arr)) {
        let newArr = [...arr];
        if (currentUnit === 'F') {
            return forLoopconvertFahrenheitToCelsius(newArr);
        }
        else {
            return forLoopconvertCelsiusToFahrenheit(newArr);
        }
    }
    return arr;
}

const convertFavoritesToCelsius = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    // for (let i = 0; i < favorites.length; i++) {
    //     favorites[i].currentTemp = convertFahrenheitToCelsius(favorites[i].currentTemp);
    //     favorites[i].fiveDaysForecast = forLoopconvertFahrenheitToCelsius(favorites[i].fiveDaysForecast);
    // }

    favorites.map(currentFavorite => {
        currentFavorite.currentTemp = convertFahrenheitToCelsius(currentFavorite.currentTemp);
        currentFavorite.fiveDaysForecast = forLoopconvertFahrenheitToCelsius(currentFavorite.fiveDaysForecast);
        return currentFavorite;
    });

    return favorites;

}

const convertFavoritesToFahrenheit = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    // for (let i = 0; i < favorites.length; i++) {
    //     favorites[i].currentTemp = convertCelsiusToFahrenheit(favorites[i].currentTemp);
    //     favorites[i].fiveDaysForecast = forLoopconvertCelsiusToFahrenheit(favorites[i].fiveDaysForecast);
    // }

    favorites.map(currentFavorite => {
        currentFavorite.currentTemp = convertCelsiusToFahrenheit(currentFavorite.currentTemp);
        currentFavorite.fiveDaysForecast = forLoopconvertCelsiusToFahrenheit(currentFavorite.fiveDaysForecast);
        return currentFavorite;
    });
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
    forLoopconvertCelsiusToFahrenheit,
    forLoopconvertFahrenheitToCelsius,
    convertTemp,
    convertFavoritesToCelsius,
    convertFavoritesToFahrenheit,
    convertIconPath,
    arrayExists
}

