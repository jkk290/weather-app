import { getWeather } from "../getWeather";

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let location = document.getElementById('city').value;
    getWeather(location);
});
