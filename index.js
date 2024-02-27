const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherIcon = document.getElementById('weatherIcon'); // Target the img by ID
const temperature = document.querySelector('.wtemp');
const description = document.querySelector('.wloc');

const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "f0b5bbb15da090d6309cac57079f9535";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(response => response.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    let body=document.querySelector('body');

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = "assets/cloud.png";
            body.style.backgroundImage = 'url("assets/cloud.jpg")'
            break;
        case 'Wind':
            weatherIcon.src = "assets/wind.png";
            body.style.backgroundImage = 'url("assets/windy.jpg")'

            break;
        case 'Clear':
            weatherIcon.src = "assets/clear.png";
            body.style.backgroundImage = 'url("assets/sunny.png")'

            break;
        case 'Snow':
            weatherIcon.src = "assets/snow.jpg";
            body.style.backgroundImage = 'url("assets/download.png")'

            break;
        case 'Drizzle':
            weatherIcon.src = "assets/drizzle.jpg";
            body.style.backgroundImage = 'url("assets/download.png")'

            break;
        case 'Haze':
            weatherIcon.src = "assets/drizzle.jpg";
            body.style.backgroundImage = 'url("assets/download.png")'

            break;

        default:
            // Optionally set a default icon
            weatherIcon.src = "assets/clear.png"; // Ensure you have a default.png or remove this line
            body.style.backgroundImage = 'url("assets/download.png")'

            break;
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
