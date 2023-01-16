const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "138add3755msh3acf73d0ae03998p14675fjsnf3bdbfcd36cf",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = "Weather in " + city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunrise2.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp + `&#8451;`;
      wind_degre.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed + " km/hr";
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Kotdwar");

const trElements = document.querySelectorAll("tr");

const cities = ["Delhi", "Noida", "Mumbai", "Tokyo"];

for (let i = 0; i < cities.length; i++) {
  const getWeather2 = (city) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        const tdElements = trElements[i + 1].querySelectorAll("td");
        tdElements[0].innerHTML = response.cloud_pct;
        tdElements[1].innerHTML = response.feels_like;
        tdElements[2].innerHTML = response.humidity;
        tdElements[3].innerHTML = response.max_temp;
        tdElements[4].innerHTML = response.min_temp;
        tdElements[5].innerHTML = response.sunrise;
        tdElements[6].innerHTML = response.sunset;
        tdElements[7].innerHTML = response.temp;
        tdElements[8].innerHTML = response.wind_degrees;
        tdElements[9].innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  };
  getWeather2(cities[i]);
}
