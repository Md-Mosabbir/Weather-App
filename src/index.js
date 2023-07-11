import "./style.css"

const cityInput = document.querySelector("#city-input")
const submitCity = document.getElementById("submit-city")

// Weather Card ----------------------

function displayWeatherCard(
  image,
  temperature,
  condition,
  city,
  country,
  date,
) {
  // Selecting all necessary HTML Elements

  const setImage = document.getElementById("image-of-weather")
  const setTemp = document.getElementById("temperature")
  const setCondition = document.getElementById("condition")
  const setLocation = document.getElementById("location")
  const setDate = document.getElementById("date")
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

// Extra Info Card ----------------------

function displayExtraWeatherInfo(
  wind,
  uv,
  sunrise,
  sunset,
  humidity,
  visibility,
  feels,
) {
  // Selecting all necessary HTML Elements

  const setWindStatus = document.querySelector("#wind-status")
  const setUV = document.querySelector("#uv-index")
  const setSunrise = document.querySelector("#sunrise")
  const setSunset = document.querySelector("#sunset")
  const setHumidity = document.querySelector("#humidity")
  const setVisibilty = document.querySelector("#visibility")
  const setFeelsLike = document.querySelector("#feels-like")

  // Setting all the info to the extra Info Card

  setWindStatus.textContent = wind
  setUV.textContent = uv

  setSunrise.textContent = sunrise
  setSunset.textContent = sunset
  setHumidity.textContent = humidity
  setVisibilty.textContent = visibility
  setFeelsLike.textContent = feels
}

function getExtraWeatherInfo(info) {
  const data = info

  const requiredExtraData = {
    windSpeed: data.current.wind_kph,
    uvIndex: data.current.uv,
    sunRise: data.forecast.forecastday[0].astro.sunrise, // problem
    sunSet: data.forecast.forecastday[0].astro.sunset,
    humidity: data.current.humidity,
    visibility: data.current.vis_km,
    feelsLikeCel: data.current.feelslike_c,
    feelsLikeFel: data.current.feelslike_f,
  }
  console.log(requiredExtraData)
  displayExtraWeatherInfo(
    requiredExtraData.windSpeed,
    requiredExtraData.uvIndex,
    requiredExtraData.sunRise,
    requiredExtraData.sunSet,
    requiredExtraData.humidity,
    requiredExtraData.visibility,
    requiredExtraData.feelsLikeCel,
  )
}

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

submitCity.addEventListener("click", () => {
  getWeatherInfo()
})
