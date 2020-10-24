import {convertCelsiusToFahrenheit, convertFahrenheitToCelsius, convertIconPath, arrayExists} from './functions';

test('Conversion test 1', () => {
    const value = convertCelsiusToFahrenheit(10);
    expect(value).toBe("50.0");
});

test('Conversion test 2', () => {
    const value = convertFahrenheitToCelsius(50);
    expect(value).toBe("10.0");
});

test('Conversion icon path', () => {
    const value = convertIconPath(5);
    expect(value).toBe("05");
});

test('Conversion icon path 2', () => {
    const value = convertIconPath(10);
    expect(value).toBe(10);
});

test('Array exists?', () => {
    const value = arrayExists(null);
    expect(value).toBeFalsy();
});

test('Array exists? 2', () => {
    const arr = [1,2,3,4];
    const value = arrayExists(arr);
    expect(value).toBeTruthy();
});
