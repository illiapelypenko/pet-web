import { WeatherForecast } from 'types'
import cloneDeep from 'lodash/cloneDeep'

export const formatWeather = (rowWeather: WeatherForecast) => {
  const weather = cloneDeep(rowWeather)

  weather.current.visibility /= 100
  weather.current.temp = +weather.current.temp.toFixed(0)
  weather.current.feels_like = +weather.current.feels_like.toFixed(0)

  return weather
}
