import "./styles.css";

function getWeather(location) {
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

function displayWeatherInfo(data) {
    const description = data.description;
    const conditions = data.currentConditions.conditions;
    const temp = data.currentConditions.temp;
    const humidity = data.currentConditions.humidity;
    const feelsLike = data.currentConditions.feelslike;
    const uvIndex = data.currentConditions.uvindex;

    console.log(`Current weather: ${conditions} \nTemperature (F): ${temp} \nHumidity: ${humidity} \nFeels Like (F): ${feelsLike} \nUV Index: ${uvIndex} \n${description}`);

};

getWeather('Honolulu');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let location = document.getElementById('city').value;
    getWeather(location);
});

