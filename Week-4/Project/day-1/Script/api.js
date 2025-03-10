const url = 'https://weatherstack1.p.rapidapi.com/api.weatherstack.com/current';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd530564a9dmsha4c33721bc3dc84p109f21jsne522c3dd5520',
		'x-rapidapi-host': 'weatherstack1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}