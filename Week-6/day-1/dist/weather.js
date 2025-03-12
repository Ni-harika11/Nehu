"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_KEY = 'X54FZATHSVT32LGAGJRJXDJYX';
const API_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
// // Function to fetch weather data for a given city
function fetchWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${API_URL}${city}?unitGroup=metric&key=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = yield response.json();
            console.log('Weather data:', data);
            displayWeather(data);
            displayHourlyWeather(data);
            return data;
        }
        catch (error) {
            console.error('Error fetching weather:', error);
            return null;
        }
    });
}
function displayWeather(data) {
    const cityName = document.querySelector('h2');
    const time = document.querySelector('p.text-6xl');
    const date = document.querySelector('p.text-lg');
    const temperature = document.querySelector('p.text-4xl');
    cityName.textContent = data.address;
    if (data.days.length > 0) {
        const currentDateTime = new Date(`${data.days[0].datetime}T${data.currentConditions.datetime}`);
        time.textContent = currentDateTime.toLocaleTimeString();
        date.textContent = currentDateTime.toDateString();
        temperature.textContent = `${data.currentConditions.temp}°C`;
    }
    else {
        console.error('No forecast data available');
    }
    // 5-day forecast
    const forecastList = document.querySelector('ul.space-y-2');
    forecastList.innerHTML = '';
    const nextFiveDays = data.days.slice(0, 5);
    nextFiveDays.forEach((day) => {
        const weatherIcon = getWeatherIcon(day.conditions);
        const listItem = document.createElement('li');
        listItem.innerHTML = `${weatherIcon} ${day.temp}°C - ${new Date(day.datetime).toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short'
        })}`;
        forecastList.appendChild(listItem);
    });
    console.log('Weather data displayed:', data);
}
function displayHourlyWeather(data) {
    var _a;
    const hourlyContainer = document.querySelector('.grid-cols-5');
    hourlyContainer.innerHTML = '';
    const hours = ((_a = data.days[0]) === null || _a === void 0 ? void 0 : _a.hours.slice(0, 5)) || [];
    hours.forEach((hour) => {
        const time = new Date(`1970-01-01T${hour.datetime}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const temp = `${hour.temp}°C`;
        const windSpeed = `💨 ${hour.windspeed} km/h`;
        const icon = getWeatherIcon(hour.conditions || 'Clear');
        const card = `
        <div class="bg-yellow-300 p-4 rounded-lg text-center">
            <p class="font-bold">${time}</p>
            <p>${icon} ${temp}</p>
            <p>${windSpeed}</p>
        </div>`;
        hourlyContainer.innerHTML += card;
    });
    console.log('Hourly weather data:', hours);
}
// Helper function to get weather icons based on conditions
function getWeatherIcon(condition) {
    if (condition.includes('Clear'))
        return '☀️';
    if (condition.includes('Cloud'))
        return '🌥️';
    if (condition.includes('Rain'))
        return '🌧️';
    if (condition.includes('Snow'))
        return '🌨️';
    if (condition.includes('Thunderstorm'))
        return '⛈️';
    return '⛅';
}
const searchInput = document.getElementById('Search');
const favlist = document.getElementById("heart");
searchInput.addEventListener('input', () => {
    const city = searchInput.value.trim();
    favlist.style.display = "none";
    if (city.length > 2) {
        fetchWeather(city);
        favlist.style.display = 'block';
    }
    else {
        favlist.style.display = 'none';
    }
});
