const apiKey = "30d76fcd2cfb069725f2cfcaae69e81a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log('date');
}


checkWeather();


