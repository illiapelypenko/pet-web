import axios from 'axios'
import { BASE_WEATHER_API_URL } from 'config'
import { WeatherForecast } from 'types'

const weatherInstance = axios.create({
  baseURL: BASE_WEATHER_API_URL,
  params: {
    units: 'metric',
    exclude: 'minutely',
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  },
})

// const getWeather = (cityName: string) => weatherInstance.get<Weather>('/weather', { params: { q: cityName } })
const getWeatherForecast = ({ lat, lon }: { lat: number; lon: number }) =>
  weatherInstance.get<WeatherForecast>('/onecall', { params: { lat, lon } })

export const weatherApi = { getWeatherForecast }
