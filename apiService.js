require('dotenv').config({path: './.env'})

console.log(process.env.API_KEY)
const apiKey = process.env.API_KEY;

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherApp = document.querySelector(".Weather-App");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            WeatherApp.src = "images/clouds.png";

        }
        else if (data.weather[0].main == "Clear") {
            WeatherApp.src = "images/clear.png";

        }
        else if (data.weather[0].main == "Clouds") {
            WeatherApp.src = "images/clouds.png";

        }
        else if (data.weather[0].main == "Rain") {
            WeatherApp.src = "images/rain.png";

        }
        else if (data.weather[0].main == "Drizzle") {
            WeatherApp.src = "images/drizzle.png";

        }
        else if (data.weather[0].main == "Mist") {
            WeatherApp.src = "images/mist.png";

        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
