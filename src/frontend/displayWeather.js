import { weatherImage } from "./getWeatherImage";
import { hideLoading } from "./displayLoading";

export function displayWeatherInfo(data) {
    const weatherInfo = document.querySelector('#weather-info');
    weatherInfo.innerHTML = '';
    
    hideLoading();
    const description = data.description;
    const conditions = data.currentConditions.conditions;
    const temp = data.currentConditions.temp;
    const humidity = data.currentConditions.humidity;
    const feelsLike = data.currentConditions.feelslike;
    const uvIndex = data.currentConditions.uvindex;

    

    const currentWeather = document.createElement('h3');
    currentWeather.id = 'current-weather';
    currentWeather.textContent = conditions;
    weatherInfo.appendChild(currentWeather);

    const currentTemp = document.createElement('p');
    currentTemp.id = 'current-temp';
    currentTemp.textContent = `Temperature: ${temp}F`;
    weatherInfo.appendChild(currentTemp);
    
    const currentHumidity = document.createElement('p');
    currentHumidity.id = 'current-humidity';
    currentHumidity.textContent = `Humidity: ${humidity}`;
    weatherInfo.appendChild(currentHumidity);

    const currentFeelsLike = document.createElement('p');
    currentFeelsLike.id = 'current-humidity';
    currentFeelsLike.textContent = `Feels Like: ${feelsLike}F`;
    weatherInfo.appendChild(currentFeelsLike);

    const currentUVIndex = document.createElement('p');
    currentUVIndex.id = 'current-uv-index';
    currentUVIndex.textContent = `UV Index: ${uvIndex}`;
    weatherInfo.appendChild(currentUVIndex);

    const currentDescription = document.createElement('p');
    currentDescription.id = 'current-description';
    currentDescription.textContent = description;
    weatherInfo.appendChild(currentDescription);


    weatherImage(conditions);


    console.log(data);

};