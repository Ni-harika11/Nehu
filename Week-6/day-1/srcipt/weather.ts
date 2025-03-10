const API_KEY: string = 'X54FZATHSVT32LGAGJRJXDJYX';
const API_URL: string = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

// Function to fetch weather data for a given city
async function fetchWeather(city: string): Promise<any> {
    try {
        const response = await fetch(`${API_URL}${city}?key=${API_KEY}&include=hours`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}


// Function to display weather data
function displayWeather(data: any): void {
    const cityName = document.querySelector('h2') as HTMLHeadingElement;
    const time = document.querySelector('p.text-6xl') as HTMLParagraphElement;
    const date = document.querySelector('p.text-lg') as HTMLParagraphElement;
    const temperature = document.querySelector('p.text-4xl') as HTMLParagraphElement;

    cityName.textContent = data.address;
    const currentDateTime=new Date(`${data.days[0].datetime}T${data.currentConditions.datetime}`);
    //display current time and date
    time.textContent=currentDateTime.toLocaleTimeString();
    date.textContent=currentDateTime.toDateString()
    temperature.textContent= `${data.currentConditions.temp}°C`;

    //Display 5-days forecast
    const  forecastList=document.querySelector("ul.space-y-2") as HTMLUListElement;
    forecastList.innerHTML='';//clear privious data
    interface WeatherDay{
        conditions:string;
        temp:string;
        datetime:string;
    }
    const nextFiveDays=data.days.slice(0,5); //get the next 5 day
    nextFiveDays.forEach((day:  WeatherDay)=>{
        const weatherIcon= getWeatherIcon(day.conditions);//get icons based on conditions
        const listItem=document.createElement("li");
        listItem.innerHTML=`${weatherIcon} ${day.temp}°C - ${new Date(day.datetime).toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short'
        })}`;
        forecastList.appendChild(listItem)
    });

    //get current date and time
    // const now=new Date();
    // time.textContent = new Date(data.currentConditions.datetime).toLocaleTimeString();
    // date.textContent = new Date(data.days[0].datetime).toDateString();
    // time.textContent=now . toLocaleTimeString();
    // date.textContent=now .toDateString();
    // temperature.textContent = `${data.currentConditions.temp}°C`;

    console.log('Weather data:', data);
}
//// Helper function to get weather icons based on conditions
function getWeatherIcon(condition: string): string {
    if (condition.includes('Clear')) return '☀️';
    if (condition.includes('Cloud')) return '🌥️';
    if (condition.includes('Rain')) return '🌧️';
    if (condition.includes('Snow')) return '🌨️';
    if (condition.includes('Thunderstorm')) return '⛈️';
    return '⛅';
}

///Display hourly
function displayHourlyWeather(data:any):void{
    const hourlyContainer=document.querySelector('.grid-cols-5') as HTMLDivElement;
    hourlyContainer.innerHTML='';

    const hours=data.days[0].hours.slice(0,5);//display the next 5 hours

    hours.forEach((hour:any)=>{
        const time=new Date(hour.datetime).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        const temp=`&{hour.temp}°C`;
        const windSpeed=`💨 ${hour.windspeed} km/h`;
        const icon=getWeatherIcon(hour.conditions || "Clear");

        //create the forecast card
        const card=`
        <div class="bg-yellow-300 p-4 rounded-lg text-center">
                <p class="font-bold">${time}</p>
                <p>${icon} ${temp}</p>
                <p>${windSpeed}</p>
            </div>`;
            hourlyContainer.innerHTML+=card;
    });
    console.log("Hourly weather data:",hours)
}

// Add event listener to the search input for real-time search
const searchInput = document.getElementById('Search') as HTMLInputElement;

searchInput.addEventListener('input', () => {
    const city = searchInput.value.trim();
    if (city.length > 2) {
        fetchWeather(city);
    }
});


// Initial fetch for default city
fetchWeather('Athens');
