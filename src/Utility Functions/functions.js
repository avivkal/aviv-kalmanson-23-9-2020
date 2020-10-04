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
    const found = favorites.find(favorite => x.key === favorite.key);
    return found === undefined ? false : true;
}

const forLoopconvertFahrenheitToCelsius = (arr) => {
    arr.map((current) => {
        current.Temperature.Minimum.Value = convertFahrenheitToCelsius(current.Temperature.Minimum.Value);
        current.Temperature.Maximum.Value = convertFahrenheitToCelsius(current.Temperature.Maximum.Value);
        current.Temperature.Minimum.Unit = 'C';
        current.Temperature.Maximum.Unit = 'C';
        return current;
    });

    return arr;
}

const forLoopconvertCelsiusToFahrenheit = (arr) => {

    arr.map((current) => {
        current.Temperature.Minimum.Value = convertCelsiusToFahrenheit(current.Temperature.Minimum.Value);
        current.Temperature.Maximum.Value = convertCelsiusToFahrenheit(current.Temperature.Maximum.Value);
        current.Temperature.Minimum.Unit = 'F';
        current.Temperature.Maximum.Unit = 'F';
        return current;
    });

    return arr;
}


const convertTemp = (arr, currentUnit) => {
    let newArr = [...arr];
    if (currentUnit === 'F') {
        return forLoopconvertFahrenheitToCelsius(newArr);
    }
    else {
        return forLoopconvertCelsiusToFahrenheit(newArr);
    }
}

export {
    convertCelsiusToFahrenheit,
    convertFahrenheitToCelsius,
    existsInFavorites,
    findKeyByName,
    forLoopconvertCelsiusToFahrenheit,
    forLoopconvertFahrenheitToCelsius,
    convertTemp
}

