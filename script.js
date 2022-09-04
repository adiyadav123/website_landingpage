const API_KEY = `c1b724d4a8b26f8f2bf3bd5cbd950b10`;
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
//const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
const getWeather =async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
  const data = await response.json()
  console.log(data)
  return showWeather(data)
}
const showWeather = (data) => {
  weather.innerHTML = `<div class="image">
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="clouds">
</div>
<div>
  <h1>${data.main.temp} K</h1>
  <h2>${data.weather[0].main}</h2>
  <h3>${data.sys.country}</h3>
</div>
</div>
`
}
form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
