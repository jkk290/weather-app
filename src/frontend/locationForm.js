import { getWeather } from "../getWeather";


export function weatherButton() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let location = document.getElementById('city').value;

        console.log(`Getting weather info for: ${location}...`)
        getWeather(location);
    });

};