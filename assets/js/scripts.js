

const searchCity = async () => {
    let city = document.querySelector('input').value;

    if(!city) return;

    let url1 = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial&q=${city}`;
    let url2 = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&units=imperial&q=${city}`;

    let currentWeather = await (await fetch(url1)).json();
    let forecast = await (await fetch(url2)).json();

    console.log(currentWeather,forecast);
}