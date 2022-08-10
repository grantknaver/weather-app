const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const key = `45171feef5ad55754c39a5dfd8e6e481&query`;
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${latitude},${longitude}&units=f`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(
                undefined, 
                `Currently ${body.current.weather_descriptions[0]} and is ${body.current.temperature} degress out, and feels like ${body.current.feelslike}.`
            );
        }
    })
}

module.exports = forecast;