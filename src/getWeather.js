import { displayWeatherInfo } from "./frontend/displayWeather";

export function getWeather(location) {
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&key=WEWSPHRRZDT9YMZW3V9T6MB8M&contentType=json`, {
        "method": "GET",
        "headers": {
         }
    })
    .catch(err => {
    console.error(err);
    })
    .then(response => {
    return response.json();
    })
    .then(data => displayWeatherInfo(data));
};