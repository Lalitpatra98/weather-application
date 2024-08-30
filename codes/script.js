let button = document.querySelector(".search-btn");
let container = document.querySelector(".container");
let search_field = document.querySelector(".search-bar");
let weather = document.querySelector(".weather-Box");
let searchINPUT = document.querySelector(".search-input");
let date = document.querySelector("#date");
let place = document.querySelector("#location");
let tempreture = document.querySelector("#temp");
let climate = document.querySelector(".climate-state");
let climateImg = document.querySelector(".climate-state-img");
let air = document.querySelector(".wind");
let humidity = document.querySelector(".humid");

button.addEventListener("click", () => {
  search_field.classList.add("not-active");
  weather.classList.add("active");
  fetching(searchINPUT.value);
});

let weatherCode = {
  1000: "Clear, Sunny",
  1100: "Mostly Clear",
  1101: "Partly Cloudy",
  1102: "Mostly Cloudy",
  1001: "Cloudy",
  2000: "Fog",
  2100: "Light Fog",
  4000: "Drizzle",
  4001: "Rain",
  4200: "Light Rain",
  4201: "Heavy Rain",
  5000: "Snow",
  5001: "Flurries",
  5100: "Light Snow",
  5101: "Heavy Snow",
  6000: "Freezing Drizzle",
  6001: "Freezing Rain",
  6200: "Light Freezing Rain",
  6201: "Heavy Freezing Rain",
  7000: "Ice Pellets",
  7101: "Heavy Ice Pellets",
  7102: "Light Ice Pellets",
  8000: "Thunderstorm",
};

const url = "https://api.tomorrow.io/v4/weather/forecast?location=";
const Apikey = "yzhzzzT7kvBvaalRMP1ZrcWD9WZAdfBj";

async function fetching(location) {
  let response = await fetch(url + `${location}&apikey=${Apikey}`);
  let data = await response.json();
  date.innerHTML = new Date().toDateString(data.timelines.minutely[0].time);
  place.innerHTML = data.location.name.split(",")[0];
  tempreture.innerHTML =
    Math.round(data.timelines.minutely[0].values.temperature) + ` °c`;
  let weatherCodeData = data.timelines.minutely[0].values.weatherCode;

  climate.innerHTML = weatherCodeData;
  air.innerHTML = data.timelines.minutely[0].values.windSpeed + ` km/hour`;
  humidity.innerHTML = data.timelines.minutely[0].values.humidity + `%`;
  return data;
}
