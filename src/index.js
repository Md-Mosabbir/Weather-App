import "./style.css"

const cityInput = document.querySelector("#city-input")
const submitCity = document.getElementById("submit-city")

// console.log the weather api info

async function getWeatherInfo() {
  const API_KEY = "bb2c9baed05042f9857155341231206"
  const weatherInfo = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityInput.value}`,

    { mode: "cors" },
  )
  const info = await weatherInfo.json()

  console.log(info)
  getWeatherCardInfo(info)
  getExtraWeatherInfo(info)
}

function displayWeatherCard(
  image,
  temperature,
  condition,
  city,
  country,
  date,
) {
  // Selecting all necessary HTML Elements

  const setImage = document.querySelector("#image-of-weather")
  const setTemp = document.querySelector("#temperature")
  const setCondition = document.querySelector("#condition")
  const setLocation = document.querySelector("#location")
  const setDate = document.querySelector("#date")
  // Setting all the info to the Weather Card
  setImage.src = image
  setTemp.textContent = temperature
  setCondition.textContent = condition
  setLocation.textContent = `${city}, ${country}`
  setDate.textContent = date
}

function getWeatherCardInfo(info) {
  const data = info
  const requiredData = {
    weatherImage: data.current.condition.icon,
    temperatureCel: data.current.temp_c,
    temperatureF: data.current.temp_f,
    condition: data.current.condition.text,
    city: data.location.name,
    country: data.location.country,
    date: data.current.last_updated,
  }

  console.log(requiredData)
  displayWeatherCard(
    requiredData.weatherImage,
    requiredData.temperatureCel,
    requiredData.condition,
    requiredData.city,
    requiredData.country,
    requiredData.date,
  )
}

function getExtraWeatherInfo(info) {
  const data = info

  const requiredData = {
    windSpeed: data.current.wind_kph,
    uvIndex: data.current.uv,
    sunRise: data.forecast.forecastday[0].astro.sunrise, // problem
    sunSet: data.forecast.forecastday[0].astro.sunset,
    humidity: data.current.humidity,
    visibility: data.current.vis_km,
    feelsLikeCel: data.current.feelslike_c,
    feelsLikeFel: data.current.feelslike_f,
  }
  console.log(requiredData)
}
function displayExtraWeatherInfo(wind, uv, sun, humidity, visibility, feels) {
  // Selecting all necessary HTML Elements
  // Setting all the info to the Weather Card
}

submitCity.addEventListener("click", () => {
  getWeatherInfo()
})
