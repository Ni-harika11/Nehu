const API_KEY: string = 'X54FZATHSVT32LGAGJRJXDJYX';
const API_URL: string = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

// Interface for the overall weather data response
interface WeatherData {
    address: string;
    days: WeatherDay[];
    currentConditions: {
        datetime: string;
        temp: number;
    };
}

// Interface for individual days' forecast
interface WeatherDay {
    datetime: string;
    temp: number;
    conditions: string;
    hours: WeatherHour[];
}

// Interface for hourly forecast data
interface WeatherHour {
    datetime: string;
    temp: number;
    windspeed: number;
    conditions: string;
}


// // Function to fetch weather data for a given city
async function fetchWeather(city: string): Promise<WeatherData | null> {
    try {
        const response = await fetch(`${API_URL}${city}?unitGroup=metric&key=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data: WeatherData = await response.json();
        console.log('Weather data:', data);
        displayWeather(data);
        displayHourlyWeather(data);
        return data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
}
function displayWeather(data: WeatherData): void {
    const cityName = document.querySelector('h2') as HTMLHeadingElement;
    const time = document.querySelector('p.text-6xl') as HTMLParagraphElement;
    const date = document.querySelector('p.text-lg') as HTMLParagraphElement;
    const temperature = document.querySelector('p.text-4xl') as HTMLParagraphElement;

    cityName.textContent = data.address;

    if (data.days.length > 0) {
        const currentDateTime = new Date(`${data.days[0].datetime}T${data.currentConditions.datetime}`);
        time.textContent = currentDateTime.toLocaleTimeString();
        date.textContent = currentDateTime.toDateString();
        temperature.textContent = `${data.currentConditions.temp}°C`;
    } else {
        console.error('No forecast data available');
    }

    // 5-day forecast
    const forecastList = document.querySelector('ul.space-y-2') as HTMLUListElement;
    forecastList.innerHTML = '';

    const nextFiveDays = data.days.slice(0, 5);
    nextFiveDays.forEach((day: WeatherDay) => {
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

function displayHourlyWeather(data: WeatherData): void {
    const hourlyContainer = document.querySelector('.grid-cols-5') as HTMLDivElement;
    hourlyContainer.innerHTML = '';

    const hours = data.days[0]?.hours.slice(0, 5) || [];

    hours.forEach((hour: WeatherHour) => {
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
function getWeatherIcon(condition: string): string {
    if (condition.includes('Clear')) return '☀️';
    if (condition.includes('Cloud')) return '🌥️';
    if (condition.includes('Rain')) return '🌧️';
    if (condition.includes('Snow')) return '🌨️';
    if (condition.includes('Thunderstorm')) return '⛈️';
    return '⛅';
}

const searchInput = document.getElementById('Search') as HTMLInputElement;
const favlist=document.getElementById("heart")as HTMLInputElement
searchInput.addEventListener('input', () => {
    const city = searchInput.value.trim();
    favlist.style.display="none";
    if (city.length > 2) {
        fetchWeather(city);
        favlist.style.display = 'block';
    }else{
         favlist.style.display = 'none';
    }
});
// favlist.style.display = city.length > 2 ? 'block' : 'none';



 
 

