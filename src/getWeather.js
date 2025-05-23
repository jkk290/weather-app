import { displayWeatherInfo } from "./frontend/displayWeather";
import { displayLoading } from "./frontend/displayLoading";

export function getWeather(location) {
    console.log(`Fetching info for: ${location}...`)
    displayLoading();
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