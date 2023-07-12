/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import "./style.css"
import "@fortawesome/fontawesome-free/js/all.js"

const cityInput = document.querySelector("#city-input")
const submitCity = document.getElementById("submit-city")
let tempClickListener = null
let feelsLikeClickListener = null

// Weather Card ------------------------

function manageCelAndFah(element, cel, fah) {
  let check = true

  if (!element.classList.contains("cel")) {
    check = false
  } else if (element.classList.contains("cel")) {
    check = true
  }

  if (check === true) {
    element.textContent = `${cel}°C`
  } else if (check === false) {
    element.textContent = `${fah}°F`
  }
}

function displayWeatherCard(
  image,
  tempC,
  tempF,
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

  if (tempClickListener) {
    setTemp.removeEventListener("click", tempClickListener)
  }

  tempClickListener = (e) => {
    e.target.classList.toggle("cel")
    manageCelAndFah(setTemp, tempC, tempF)
  }
  setTemp.addEventListener("click", tempClickListener)

  // Setting all the info to the Weather Card
  setImage.src = image
  manageCelAndFah(setTemp, tempC, tempF)
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

  displayWeatherCard(
    requiredData.weatherImage,
    requiredData.temperatureCel,
    requiredData.temperatureF,
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
  feelsC,
  feelsF,
) {
  // Selecting all necessary HTML Elements

  const setWindStatus = document.querySelector("#wind-status")
  const setUV = document.querySelector("#uv-index")
  const setSunrise = document.querySelector("#sunrise")
  const setSunset = document.querySelector("#sunset")
  const setHumidity = document.querySelector("#humidity")
  const setVisibilty = document.querySelector("#visibility")
  const setFeelsLike = document.querySelector("#feels-like")

  if (feelsLikeClickListener) {
    setFeelsLike.removeEventListener("click", feelsLikeClickListener)
  }

  // Add the new event listener and update the feelsLikeClickListener reference
  feelsLikeClickListener = (e) => {
    e.target.classList.toggle("cel")
    manageCelAndFah(setFeelsLike, feelsC, feelsF)
  }
  setFeelsLike.addEventListener("click", feelsLikeClickListener)
  // Setting all the info to the extra Info Card

  setWindStatus.textContent = `${wind} km/h`
  setUV.textContent = uv

  setSunrise.textContent = sunrise
  setSunset.textContent = sunset
  setHumidity.textContent = `${humidity}%`
  setVisibilty.textContent = `${visibility} km`
  manageCelAndFah(setFeelsLike, feelsC, feelsF)
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

  displayExtraWeatherInfo(
    requiredExtraData.windSpeed,
    requiredExtraData.uvIndex,
    requiredExtraData.sunRise,
    requiredExtraData.sunSet,
    requiredExtraData.humidity,
    requiredExtraData.visibility,
    requiredExtraData.feelsLikeCel,
    requiredExtraData.feelsLikeFel,
  )
}

// console.log the weather api info

async function getWeatherInfo() {
  const API_KEY = "bb2c9baed05042f9857155341231206"
  try {
    const weatherInfo = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityInput.value}`,

      { mode: "cors" },
    )

    const info = await weatherInfo.json()
    document.querySelector("#error").textContent = ""

    getWeatherCardInfo(info)
    getExtraWeatherInfo(info)
  } catch (error) {
    document.querySelector("#error").textContent = "Please Try Again"
  }
}

submitCity.addEventListener("click", () => {
  const temp = document.querySelector("#temperature")
  const feels = document.querySelector("#feels-like")

  if (!temp.classList.contains("cel") || !feels.classList.contains("cel")) {
    document.querySelector("#temperature").classList.add("cel")
    document.querySelector("#feels-like").classList.add("cel")
  }
  getWeatherInfo()
})

getWeatherInfo() // for now

// ------- BLOB Logic-------

const blob = document.getElementById("blob")

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event
  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 2500, fill: "forwards" },
  )
}
