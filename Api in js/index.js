// let City = prompt("Enter Your City Or Country");
let City = document.querySelector("#city");
let p = document.querySelector("#error");
let loc = document.querySelector(".loc");
let danger = new Audio("danger.mp3");
let r = document.querySelector(":root");

function dangerError() {
  danger.currentTime = 0;
  danger.play();
  r.style.setProperty("--blue", "red");
  r.style.setProperty("--text", "red");
}
function dangerNot() {
  danger.pause();
  r.style.setProperty("--blue", "rgb(0, 110, 255)");
  r.style.setProperty("--text", "white");
}
async function Api() {
  let apiCalls = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=d75cc7f4488c4e2482551255253009&q=${City.value}&aqi=no`
  );
  let data = await apiCalls.json();
  console.log(data);
  if (data.error?.code === 1003) {
    p.innerHTML = "Plz Enter a Name of City Or Country.";
    loc.innerHTML = "Location: Not Found";
    dangerError();
    return console.error("Code: 1003 'Plz Enter a Name of City Or Country.'");
  }
  if (data.error?.code === 1006) {
    p.innerHTML = "No matching location found.";
    loc.innerHTML = "Location: Not Found";
    dangerError();
    return console.error("Code: 1006 'No matching location found.'");
  }
  if (City.value) {
    dangerNot()
    loc.innerHTML = `Location: ${data.location.name}, ${data.location.country}`;
    p.innerHTML = `
<div class="info-cont">
      <div class="right">
        <img
          src="https:${data.current.condition.icon}"
          alt=""
          height="150px"
          width="150px"
        />
        <div class="right-partFirst">
          <span class="pri">${data.current.temp_c} °C</span>
          <p>
            Feels like ${data.current.feelslike_c}°C <br />
            Condition - ${data.current.condition.text} <br />
            Humidity: ${data.current.humidity}% · Wind: ${data.current.wind_kph} kph
          </p>
        </div>
      </div>
      <div class="left">
        <div>
          <span class="pri2">Today — ${data.current.last_updated}</span>
          <p>
            Max: ${data.forecast.forecastday[0].day.maxtemp_c}°C · Min: ${data.forecast.forecastday[0].day.mintemp_c}°C <br />
            Avg Humidity: ${data.forecast.forecastday[0].day.avghumidity}% · Chance of rain: ${data.forecast.forecastday[0].day.daily_chance_of_rain}% <br />
            SunRise : ${data.forecast.forecastday[0].astro.sunrise} - MoonRise : ${data.forecast.forecastday[0].astro.moonrise} <br/>
            SunSet : ${data.forecast.forecastday[0].astro.sunset} - MoonSet : ${data.forecast.forecastday[0].astro.moonset}
          </p>
        </div>
      </div>
    </div>`;
  }
}
